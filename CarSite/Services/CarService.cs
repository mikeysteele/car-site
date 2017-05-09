using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using CarSite.Entities;
using System.Data.Entity;

namespace CarSite.Services
{
    public class CarService : ICarService
    {
        private CarsContext dbContext;
        public CarService(CarsContext dbContext)
        {
            this.dbContext = dbContext;
        }
        public Car GetCar(int CarId)
        {
            return new Car()
            {
                Id = 2,
                Title = "Toyota",
                ImagePath = "/Content/toyota1.jpg",
                Price = 22000,
            };

        }

        public List<Car> GetCars()
        {
            return this.dbContext.Cars.ToList();
        }
    }
}
