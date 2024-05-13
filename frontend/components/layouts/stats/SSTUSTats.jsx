import React from "react";

const SSTUSTats = () => {
  return (
    <div class="bg-gray-50 py-20 h-screen">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="max-w-4xl mx-auto text-center">
          <h2 class="text-3xl font-extrabold text-gray-900 sm:text-4xl">AT A GLANCE</h2>
          <p class="mt-3 text-xl text-gray-500 sm:mt-4">Sunamganj Science & Technology University</p>
        </div>
      </div>
      <div class="mt-10 pb-1">
        <div class="relative">
          <div class="absolute inset-0 h-1/2 bg-gray-50"></div>
          <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="max-w-4xl mx-auto">
              <dl class="rounded-lg bg-white shadow-lg sm:grid sm:grid-cols-3">
                <div class="flex flex-col border-b border-gray-100 p-6 text-center sm:border-0 sm:border-r">
                  <dt class="order-2 mt-2 text-lg leading-6 font-thin text-gray-500">Departments</dt>
                  <dd class="order-1 text-5xl font-extrabold text-gray-700">5+</dd>
                </div>
                <div class="flex flex-col border-t border-b border-gray-100 p-6 text-center sm:border-0 sm:border-l sm:border-r">
                  <dt class="order-2 mt-2 text-lg leading-6 font-thin text-gray-500">Faculties</dt>
                  <dd class="order-1 text-5xl font-extrabold text-gray-700">2+</dd>
                </div>
                <div class="flex flex-col border-t border-gray-100 p-6 text-center sm:border-0 sm:border-l">
                  <dt class="order-2 mt-2 text-lg leading-6 font-thin text-gray-500">Faculty Members</dt>
                  <dd class="order-1 text-5xl font-extrabold text-gray-700">30+</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SSTUSTats;
