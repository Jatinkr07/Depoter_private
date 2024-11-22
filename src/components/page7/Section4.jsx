import React from "react";
import Container from "../global/Container";

const Section4 = () => {
  return (
    <div className="w-full bg-gray-50">
      <Container>
        <div className="py-[100px] max-[600px]:py-[1rem] bg-gray-50">
          {/* Header */}
          <div className="text-center mb-12 max-[600px]:-mb-8">
            <h3 className="text-3xl md:text-[52px] font-semibold max-[600px]:text-[1.5rem] text-gray-800">
              Manage Your Inventory Smarter <br /> <p className="max-[600px]:-mt-1 md:mt-5">With These Powerful Tools</p>
            </h3>
            <p className="text-lg max-[600px]:text-[0.8rem] md:text-[24px] max-[600px]:-mt-4 text-gray-600">
              Discover seamless, reliable and efficient point-of-sale solutions
              tailored to your <br className="max-[600px]:hidden block" />{" "}
              business needs.
            </p>
          </div>

          {/* Main Content */}
          <div className="py-12 px-4 md:px-12 lg:px-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Inventory Forecasting */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="bg-amber-50 p-4 rounded-lg mb-4">
                  <img
                    src="chart-forecasting.png"
                    alt="Inventory Forecasting"
                    className="w-full h-auto"
                  />
                </div>
                <h4 className="font-semibold text-gray-800 max-[600px]:text-lg text-2xl mb-2">
                  Inventory Forecasting
                </h4>
                <p className="text-gray-600 max-[600px]:text-sm text-lg">
                  Forecast your future inventory requirements more accurately by
                  analyzing past sales data alongside current market trends.
                </p>
              </div>

              {/* Inventory Tracking */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="bg-amber-50 p-4 rounded-lg mb-4">
                  <img
                    src="inventory-tracking.png"
                    alt="Inventory Tracking"
                    className="w-full h-auto"
                  />
                </div>
                <h4 className="font-semibold text-gray-800 max-[600px]:text-lg text-2xl mb-2">
                  Easily track your store's inventory
                </h4>
                <p className="text-gray-600 max-[600px]:text-sm text-lg">
                  Effortlessly track and manage your store's inventory with
                  real-time updates, ensuring you stay informed and never miss a
                  stock change.
                </p>
              </div>
            </div>

            <br />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Low Stock Alert */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="bg-amber-50 p-4 rounded-lg mb-4">
                  <img
                    src="low-stock.png"
                    alt="Low Stock Alert"
                    className="w-full h-auto"
                  />
                </div>
                <h4 className="font-semibold text-gray-800 max-[600px]:text-lg text-2xl mb-2">
                  Low Stock Alert
                </h4>
                <p className="text-gray-600 text-lg max-[600px]:text-sm">
                  Automatically get notified when your inventory is running low.
                </p>
              </div>

              {/* Multi-Location Support */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="bg-amber-50 p-4 rounded-lg mb-4">
                  <img
                    src="multi-location.png"
                    alt="Multi-Location Support"
                    className="w-full h-auto"
                  />
                </div>
                <h4 className="font-semibold text-gray-800 text-2xl max-[600px]:text-lg mb-2">
                  Multi-Location Support
                </h4>
                <p className="text-gray-600 text-lg max-[600px]:text-sm">
                  Manage inventory across multiple warehouses or retail
                  locations.
                </p>
              </div>

              {/* Supplier Management */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="bg-amber-50 p-4 rounded-lg mb-4">
                  <img
                    src="supplier-management.png"
                    alt="Supplier Management"
                    className="w-full h-auto"
                  />
                </div>
                <h4 className="font-semibold text-gray-800 text-2xl max-[600px]:text-lg mb-2">
                  Supplier Management
                </h4>
                <p className="text-gray-600 text-lg max-[600px]:text-sm">
                  Keep track of suppliers and order statuses with ease.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Section4;
