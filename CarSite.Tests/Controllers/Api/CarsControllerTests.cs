using Microsoft.VisualStudio.TestTools.UnitTesting;
using CarSite.Controllers;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Moq;
using CarSite.Services;
using CarSite.Entities;

namespace CarSite.Controllers.Tests
{
    [TestClass()]
    public class CarsControllerTests
    {
        private Mock<ICarService> mockService;
        private CarsController controller;
        private List<Car> cars;
        [TestInitialize]
        public void TestInitialize()
        {
            mockService = new Mock<ICarService>();
            controller = new CarsController(mockService.Object);
            this.cars = new List<Car>();
            cars.Add((new Car()
            {
                Id = 1
            }));

        }
        [TestMethod()]
        public void GetTest()
        {
            mockService.Setup(x => x.GetCars()).Returns(cars);

            var result = controller.Get();
            Assert.IsNotNull(result);
            Assert.AreEqual(1, result.Count);
            Assert.AreEqual(result[0].Id , cars[0].Id);
        }

    }
}