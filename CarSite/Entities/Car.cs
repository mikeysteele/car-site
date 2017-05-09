namespace CarSite.Entities
{

    public class Car
    { 
        public Car() { 
       
        }
        public int Id { get; set; }
        public string Title { get; set; }
        public string ImagePath { get; set; }
        public decimal Price { get; set; }
        public int Type { get; set; }
        
    }
}
