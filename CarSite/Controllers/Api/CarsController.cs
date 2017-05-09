using CarSite.Entities;
using CarSite.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace CarSite.Controllers
{
    public class CarsController : ApiController
    {
        ICarService carService;
        public CarsController(ICarService CarService)
        {
            carService = CarService;
        }
        
        // GET api/<controller>
        public List<Car> Get()
        {
            return this.carService.GetCars();
        }

        // GET api/<controller>/5
        public Car Get(int id)
        {
            return this.carService.GetCar(id);
        }

        // POST api/<controller>
        public void Post([FromBody]string value)
        {
        }

        // PUT api/<controller>/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/<controller>/5
        public void Delete(int id)
        {
        }
    }
}