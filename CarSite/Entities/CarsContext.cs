using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data.Entity;

namespace CarSite.Entities
{
    public class CarsContext : DbContext
    {


        public CarsContext() : base()
        {

        }

        public DbSet<Car> Cars { get; set; }

    }
}