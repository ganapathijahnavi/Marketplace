import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ProjectItem from '../ProjectItem';
import axios from 'axios';
import AnimatedBanner from './AnimatedBanner';

// Styled Layout
const PageWrapper = styled.div`
  margin-top: 8vh;
  background: linear-gradient(to bottom right, #f4fff4, #e8f5e9);
  min-height: 100vh;
`;

const ContentWrapper = styled.div`
  display: flex;
  gap: 2rem;
  padding: 2rem;
  background-color: #fff;
  border-radius: 12px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.05);
  margin: 0 2rem;
`;

const Sidebar = styled.div`
  width: 260px;
  border-right: 1px solid #ddd;
  padding-right: 1rem;
`;

const CategoryTitle = styled.h4`
  font-weight: bold;
  margin-bottom: 1rem;
  font-size: 1.2rem;
  color: #2e7d32;
`;

const CategoryList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const CategoryCheckbox = styled.label`
  display: flex;
  align-items: center;
  font-size: 15px;
  color: #333;
  cursor: pointer;

  input {
    margin-right: 8px;
  }
`;

const Main = styled.div`
  flex: 1;
`;

const SearchBar = styled.input`
  padding: 10px 14px;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  width: 100%;
  margin-bottom: 1.5rem;
`;

const Heading = styled.h2`
  font-size: 2rem;
  color: #222;
  margin-bottom: 1.5rem;
`;

const ProjectGrid = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(270px, 1fr));
  gap: 1.5rem;
  padding: 0;
`;

const NoProjects = styled.p`
  font-size: 1.2rem;
  color: #666;
  text-align: center;
  margin-top: 2rem;
`;

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  // Fetch carbon projects
  useEffect(() => {
    axios.get('http://localhost:5100/api/projects')
      .then(res => setProjects(res.data))
      .catch(err => console.error('Error fetching projects:', err));
  }, []);

  // Fetch project categories
  useEffect(() => {
    axios.get('http://localhost:5100/category')
      .then(res => setCategories(res.data))
      .catch(err => console.error('Error fetching categories:', err));
  }, []);

  const toggleCategory = (categoryName) => {
    setSelectedCategories(prev =>
      prev.includes(categoryName)
        ? prev.filter(cat => cat !== categoryName)
        : [...prev, categoryName]
    );
  };

  const filteredProjects = projects.filter(project => {
    const matchesSearch =
      project.name?.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesCategory =
      selectedCategories.length === 0 ||
      selectedCategories.includes(project.category);

    return matchesSearch && matchesCategory;
  });

  return (
    <PageWrapper>
      <AnimatedBanner />

      <ContentWrapper>
        <Sidebar>
          <CategoryTitle>Project Categories</CategoryTitle>
          <CategoryList>
            {categories.map(cat => (
              <CategoryCheckbox key={cat._id}>
                <input
                  type="checkbox"
                  checked={selectedCategories.includes(cat.name)}
                  onChange={() => toggleCategory(cat.name)}
                />
                {cat.name}
              </CategoryCheckbox>
            ))}
          </CategoryList>
        </Sidebar>

        <Main>
          <SearchBar
            type="text"
            placeholder="Search by project name..."
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
          />

          <Heading>Carbon Credit Projects</Heading>

          {filteredProjects.length > 0 ? (
            <ProjectGrid>
              {filteredProjects.map(project => (
                <li key={project._id}>
                  <ProjectItem
                    id={project._id}
                    name={project.name}
                    category={project.category}
                    price={project.pricePerCredit}
                    impactScore={project.impactScore}
                    img={project.image}
                  />
                </li>
              ))}
            </ProjectGrid>
          ) : (
            <NoProjects>No projects found. Try changing filters.</NoProjects>
          )}
        </Main>
      </ContentWrapper>
    </PageWrapper>
  );
};

export default Projects;
