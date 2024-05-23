import PriceOption from "../priceoption/priceoption";


const priceoptions = () => {

    {
        "gym": {
          "name": "Fitness Pro Gym",
          "location": "1234 Fitness St, Workout City, Fitland",
          "membershipPlans": [
            {
              "id": 1,
              "name": "Basic",
              "price": 29.99,
              "features": [
                "Access to gym equipment",
                "Locker room access",
                "1 free personal training session"
              ],
              "duration": "1 month"
            },
            {
              "id": 2,
              "name": "Standard",
              "price": 49.99,
              "features": [
                "Access to gym equipment",
                "Locker room access",
                "5 free personal training sessions",
                "Access to group classes"
              ],
              "duration": "1 month"
            },
            {
              "id": 3,
              "name": "Premium",
              "price": 69.99,
              "features": [
                "Access to gym equipment",
                "Locker room access",
                "10 free personal training sessions",
                "Access to group classes",
                "Free gym merchandise",
                "Access to VIP lounge"
              ],
              "duration": "1 month"
            },
            {
              "id": 4,
              "name": "Annual Basic",
              "price": 299.99,
              "features": [
                "Access to gym equipment",
                "Locker room access",
                "12 free personal training sessions"
              ],
              "duration": "1 year"
            },
            {
              "id": 5,
              "name": "Annual Standard",
              "price": 499.99,
              "features": [
                "Access to gym equipment",
                "Locker room access",
                "60 free personal training sessions",
                "Access to group classes"
              ],
              "duration": "1 year"
            },
            {
              "id": 6,
              "name": "Annual Premium",
              "price": 699.99,
              "features": [
                "Access to gym equipment",
                "Locker room access",
                "120 free personal training sessions",
                "Access to group classes",
                "Free gym merchandise",
                "Access to VIP lounge"
              ],
              "duration": "1 year"
            }
          ]
        }
      }
      
    return (
        <div>
            <h2 className="text-2xl">Best price Ever</h2>
           {
            priceoptions.map(option=> <PriceOption key={option.id}option={option}></PriceOption>)
           }
            
        </div>
    );
};

export default priceoptions;