using System.Web.Mvc;
using Microsoft.Practices.Unity;
using UnityMvc5 = Unity.Mvc5;
using UnityWebApi = Unity.WebApi;
using System.Web.Http;
using CarSite.Services;
using System.Data.Entity;
using CarSite.Entities;

namespace CarSite
{
    public static class UnityConfig
    {
        public static void RegisterComponents()
        {
            var container = new UnityContainer();

            // register all your components with the container here
            // it is NOT necessary to register your controllers

            // e.g. container.RegisterType<ITestService, TestService>();
            container.RegisterType<ICarService,CarService>();
            container.RegisterType<DbContext, CarsContext>(new PerThreadLifetimeManager());

            DependencyResolver.SetResolver(new UnityMvc5.UnityDependencyResolver(container));

            GlobalConfiguration.Configuration.DependencyResolver = new UnityWebApi.UnityDependencyResolver(container);

        }
    }
}