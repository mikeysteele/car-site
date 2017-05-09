using CarSite.Controllers;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using System.Web.Mvc;
using System.Web;

namespace Plutus.DataService.Tests.Controllers
{


    [TestClass]
    public class HomeControllerTest
    {

        //private Mock<HttpContextBase> moqContext;
        //private Mock<HttpRequestBase> moqRequest;

        //[TestInitialize]
        //public void SetupTests()
        //{
        //    // Setup Moq
        //    moqContext = new Mock<HttpContextBase>();
        //    moqRequest = new Mock<HttpRequestBase>();
        //    moqContext.Setup(x => x.Request).Returns(moqRequest.Object);
        //}
        [TestMethod]
        public void Index()
        {
            // Arrange
            HomeController controller = new HomeController();
            ViewResult result = controller.Index() as ViewResult;
            Assert.AreEqual("Car Site", result.ViewBag.Title);
        }
    }
}
