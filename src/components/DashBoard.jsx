import React from 'react';
import { Breadcrumb } from 'antd';
import '../components/DashBoard.css';

export const Dashboard = () => {
  return (
    <div>
      {/* Breadcrumb Section */}
      <Breadcrumb
        items={[
          {
            title: 'Home',
          },
          {
            title: 'Dashboard',
          },
        ]}
        style={{ paddingTop: '20px', paddingLeft: '28px', marginBottom: '10px' }} // Adjusted Padding and Margin
      />

      {/* Banner Section */}
      <section className="banner">
        <div className="content">
          <h1>Stay Connected Like Never Before</h1>
          <p>
            Chat effortlessly with a sleek, modern interface designed for real-time interactions.
          </p>
          <button className="cta-button">Know more</button>
        </div>
        <div className="image">
          <img src="/img1.png" alt="Rocket Image" />
        </div>
      </section>
    </div>
  );
};
