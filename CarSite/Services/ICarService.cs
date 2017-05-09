using CarSite.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CarSite.Services
{
   public interface ICarService
    {
        List<Car> GetCars();
        Car GetCar(int CarId);
    }
}
