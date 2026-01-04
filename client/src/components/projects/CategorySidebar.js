import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const SidebarContainer = styled.div`
  width: 240px;
  padding: 1rem;
  border-right: 1px solid #ddd;
`;

const SectionTitle = styled.h4`
  font-weight: bold;
  margin-bottom: 1rem;
  color: #2e7d32;
`;

const CategoryList = styled.ul`
  list-style: none;
  padding: 0;
`;

const CategoryItem = styled.li`
  margin: 8px 0;
  color: #1b5e20;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

const CategorySidebar = ({ onSelectCategory }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios.get('https://marketplace-1-thid.onrender.com/category')
      .then(res => setCategories(res.data))
      .catch(err => console.error("Error fetching project categories", err));
  }, []);

  return (
    <SidebarContainer>
      <SectionTitle>Project Categories</SectionTitle>
      <CategoryList>
        {categories.map(cat => (
          <CategoryItem
            key={cat._id}
            onClick={() => onSelectCategory(cat.name)}
          >
            {cat.name}
          </CategoryItem>
        ))}
      </CategoryList>
    </SidebarContainer>
  );
};

export default CategorySidebar;

