import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import LoaderSpinner from "../../components/LoaderSpinner";

const Wrapper = styled.div`
  margin-top: 10vh;
  padding: 2rem;
  min-height: 100vh;
  background-color: #f9f9f9;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: #3e3e3e;
  font-weight: bold;
  margin-bottom: 2rem;
`;

const Card = styled.div`
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.08);
  padding: 1.5rem;
  margin-bottom: 1.5rem;
`;

const Field = styled.p`
  margin: 0.25rem 0;
  color: #444;
  font-size: 15px;
`;

const StatusRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 1rem;
`;

const UpdateButton = styled.button`
  background-color: #625afc;
  color: white;
  border: none;
  padding: 10px 16px;
  border-radius: 8px;
  cursor: pointer;
  width: 170px;
  transition: 0.3s;

  &:hover {
    background-color: #4f48dc;
  }
`;

const DisabledButton = styled.button`
  border: none;
  padding: 10px 16px;
  border-radius: 8px;
  color: white;
  background-color: ${(props) =>
    props.type === "used" ? "#e67e22" : "#2ecc71"};
  cursor: not-allowed;
`;

const UpdateFormWrapper = styled.div`
  background: #ffffff;
  border-radius: 12px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.08);
  padding: 1.5rem;
  margin: 0 auto 2rem;
  max-width: 420px;
  position: relative;
  z-index: 2;
`;

const FormRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  max-width: 320px;
`;

const StyledLabel = styled.label`
  font-weight: 600;
  color: #2c3e50;
`;

const StyledSelect = styled.select`
  padding: 10px 12px;
  border-radius: 10px;
  border: 1px solid #d0d7de;
  background: #fff;
  font-size: 15px;
  color: #2c3e50;
  outline: none;
  box-shadow: inset 0 1px 2px rgba(0,0,0,0.04);
`;

const FormActions = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 12px;
`;

const SaveButton = styled.button`
  padding: 10px 16px;
  border-radius: 10px;
  border: none;
  background: #28a745;
  color: #fff;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.25s ease;

  &:hover { background: #218838; }
`;

const CancelButton = styled.button`
  padding: 10px 14px;
  border-radius: 10px;
  border: 1px solid #d0d7de;
  background: #fff;
  color: #2c3e50;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s ease, border-color 0.2s ease;

  &:hover { background: #f6f8fa; border-color: #c0c6cc; }
`;

const Orders = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [orders, setOrders] = useState([]);
  const [isUpdate, setIsUpdate] = useState(false);
  const [selectedOrderId, setSelectedOrderId] = useState("");
  const [statusForm, setStatusForm] = useState({ status: "Purchased" });

  const formatUser = (user) => {
    if (!user) return "N/A";
    if (typeof user === "string") return user;
    if (user.username && user.email) return `${user.username} (${user.email})`;
    if (user.username) return user.username;
    if (user.email) return user.email;
    if (user._id) return user._id;
    try {
      return JSON.stringify(user);
    } catch (_) {
      return "N/A";
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = () => {
    const token = localStorage.getItem("adminJwtToken");
    if (!token) return;

    axios
      .get("http://localhost:5100/api/orders", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => setOrders(res.data || []))
      .catch((err) =>
        console.error("Error fetching orders:", err.response?.data || err.message)
      );
  };

  const onSubmit = () => {
    const token = localStorage.getItem("adminJwtToken");

    axios
      .put(
        `http://localhost:5100/api/orders/${selectedOrderId}/status`,
        statusForm,
        { headers: { Authorization: `Bearer ${token}` } }
      )
      .then(() => {
        setIsUpdate(false);
        fetchOrders();
      })
      .catch((err) =>
        console.error("Update error:", err.response?.data || err.message)
      );
  };

  const onChangeStatus = (order) => {
    setIsUpdate(true);
    setSelectedOrderId(order._id);
    setStatusForm({ status: order.status || "Purchased" });
  };

  return (
    <Wrapper>
      {isLoading ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "60vh",
          }}
        >
          <LoaderSpinner />
        </div>
      ) : (
        <>
          <Title>Carbon Credit Orders</Title>

          {orders.length === 0 ? (
            <div style={{ textAlign: "center" }}>
              <img
                src="https://img.freepik.com/free-vector/online-shopping-concept-illustration_114360-1084.jpg"
                alt="No Orders"
                style={{ maxWidth: "100%", height: "auto" }}
              />
              <h3 style={{ marginTop: "1rem", color: "#3e3e3e" }}>
                No Orders Found
              </h3>
            </div>
          ) : (
            <>
              {isUpdate && (
                <UpdateFormWrapper>
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      onSubmit();
                    }}
                  >
                    <FormRow>
                      <StyledLabel>Update Order Status</StyledLabel>
                      <StyledSelect
                        value={statusForm.status}
                        onChange={(e) =>
                          setStatusForm({ status: e.target.value })
                        }
                      >
                        <option value="Purchased">Purchased</option>
                        <option value="Owned">Owned</option>
                        <option value="Offset Used">Offset Used</option>
                      </StyledSelect>
                    </FormRow>
                    <FormActions>
                      <SaveButton type="submit">Save Changes</SaveButton>
                      <CancelButton type="button" onClick={() => setIsUpdate(false)}>
                        Cancel
                      </CancelButton>
                    </FormActions>
                  </form>
                </UpdateFormWrapper>
              )}

              {!isUpdate &&
                orders.map((order) => (
                  <Card key={order._id}>
                    <Field>
                      <strong>Order ID:</strong> {order._id}
                    </Field>
                    <Field>
                      <strong>User:</strong> {formatUser(order.user)}
                    </Field>
                    <Field>
                      <strong>Project:</strong> {order.project?.name}
                    </Field>
                    <Field>
                      <strong>Credits Purchased:</strong>{" "}
                      {order.creditsPurchased}
                    </Field>
                    <Field>
                      <strong>Total Amount:</strong> ₹{order.totalAmount}
                    </Field>
                    <Field>
                      <strong>Created At:</strong>{" "}
                      {new Date(order.createdAt).toLocaleString()}
                    </Field>

                    <StatusRow>
                      <Field>
                        <strong>Status:</strong> {order.status}
                      </Field>

                      <UpdateButton
                        onClick={() => onChangeStatus(order)}
                      >
                        Update Status
                      </UpdateButton>
                    </StatusRow>
                  </Card>
                ))}
            </>
          )}
        </>
      )}
    </Wrapper>
  );
};

export default Orders;
