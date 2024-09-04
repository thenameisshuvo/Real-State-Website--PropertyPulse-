var propertyOverview=[
    {
        propertyName:'1. Villa :',
        propertyDescription:`Villas are typically modern in architecture, double-story, and offer all 
        the latest in luxury lifestyles. This may include swimming pools, courts for lawn sports, 
        jogging paths, manicured parks, playgrounds for children, gyms, etc. With their own 24X7 monitoring 
        services, Villas are situated inside a safe and protected campus.`,
        propertyImage:'https://img.freepik.com/premium-photo/modern-house-with-pool-surrounded-by-lush-greenery-featuring-blue-chair-white-umbrellas-set-against-clear-blue-sky_1203177-109.jpg?w=1060'
    },
    {
        propertyName:'2. Duplex House :',
        propertyDescription:`A duplex house is a residential building constructed on two floors 
        where one floor is connected to the second floor by stairs. A duplex house design generally has kitchen, hall and bedrooms on the lower 
        floor while the upper floor houses the master bedroom. Duplex house is an ideal 
        solution for a joint family where families want to stay together but also like to have 
        their privacy.`,
        propertyImage:'https://img.freepik.com/premium-photo/house-with-large-window-that-has-word-it_1135748-50472.jpg?w=1060'
    },
    {
        propertyName:'3. Bungalow :',
        propertyDescription:`A bungalow is a small house or cottage that is either single-story or has
        a second story built into a sloping roof (usually with dormer windows), and may be surrounded
        by wide verandas. Bungalows are very convenient for the homeowner in that all living areas are
        on a single-story. A bungalow is well suited to persons with impaired mobility, such as the
        elderly or those in wheelchairs. Bungalows provide cost-effective residences.`,
        propertyImage:'https://img.freepik.com/free-photo/beautiful-swimming-pool-resort_1339-7054.jpg?t=st=1725463544~exp=1725467144~hmac=83cb91abc34ebcd3a4fb0a79a180ab16a253548277895a67b4a7a2d38e4264c9&w=996'
    },
    {
        propertyName:'4. Flats :',
        propertyDescription:`Flat is a self-contained housing unit that occupies part of a building,
        generally on a single story with a set of rooms - 1BHK, 2BHK or more. It generally covers 
        all the basic amenities required for comfortable living.`,
        propertyImage:'/images/modern-residential-apartments-with-flats-building-exterior-outdoor-facilities-new-luxury-house-home-complex-green-yard-city-real-estate-property-condo-architecture-emp.jpg'
    },
    {
        propertyName:'5. Eco-friendly House :',
        propertyDescription:`An Eco-friendly House is an environmentally low-impact home designed 
        and built using materials and technology that reduces its carbon footprint and lowers its 
        energy needs. Eco-homes are measured in multiple ways meeting sustainability needs such as 
        water conservation, reducing wastes, controlling pollution, energy generation and decreasing CO2 
        emissions.`,
        propertyImage:'/images/ecofriendly-residence-generative-ai_28914-6547.jpg'
    },
]

var companyOverview=[
    {
       companyDescription:`Property Pulse is a real-estate platform that makes it possible to buy a house without paying any brokerage.
       Property Pulse was started because all of us believed that paying hefty brokerage can not be the only option to find a new home.
       we have tried to ensure that maximum information is available to you in as easy to use format.<br><br>This ensures
       that you get a very good idea of the property even before you visit it. Thus, you can shortlist flats
       sitting at the comfort of your home without actually traveling all the good and bad properties.
       This saves your time and effort and with a quick shortlist of 4-5 properties you can actually get a house
       in few hours!<br><br>And buyers, get your dream house and get in touch with us to let us know how else we can help !`,
       companyImage:'https://img.freepik.com/premium-photo/house-with-green-lawn-view-city_1221953-10264.jpg?w=996'
    }
]

companyOverview.forEach((e)=>{
    document.getElementById('infoContainer').innerHTML=`
    <div class="contentDiv">
        <p style="margin:10px;">${e.companyDescription}</p>
    </div>
    <div class="photoDiv">
        <img src="${e.companyImage}" alt="" class="img">
    </div>`
})

propertyOverview.forEach((e)=>{
    document.getElementById('propertyOverviewDiv').innerHTML+=`
    <div class="container-fluid infoContainer1">
        <div class="contentDiv1">
            <h3 class="villa">${e.propertyName}</h3>
            <p style="margin:10px;">${e.propertyDescription}</p>
        </div> 
        <div class="photoDiv1">
            <img src="${e.propertyImage}" alt="" class="img1">
        </div>    
    </div>`
})

