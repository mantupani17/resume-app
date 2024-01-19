## Resume Application
 Application is to view the details of a candidate.
### Tech Stack Used Below
1. Bacend - Nodejs (Nestjs Framework)
2. Frontend - Reactjs (create-react-app cli)
3. Database - MongoDB 

## Environment configuration
- `MONGO_CONNECTION_URL=mongodb://localhost:27017`
- `MONGO_DB=resume-db`

## Major Npm Packages
- jsonwebtoken (For verifying and generating the token)
- mongoose (For communicating with mongoDb)
- chartjs (For visualiing the data)

## Data to be added to the collections
1. app_configs (Storing the configurations)
2. users (storing the user creds)
3. cvs (storing the user details)
- app_configs - This added for listing the menu dynamically.
`
{
  "_id": {
    "$oid": "65a9581e8b54bc1d469ada0f"
  },
  "name": "MenuList",
  "settings": [
    {
      "module": "Dashboard",
      "url": "/",
      "name": "Dashboard",
      "right": true,
      "loginRequired": true
    },
    {
      "module": "Signin",
      "url": "/sign-in",
      "name": "Signin",
      "right": true,
      "loginRequired": false
    },
    {
      "module": "Signup",
      "url": "/sign-up",
      "name": "Signup",
      "right": true,
      "loginRequired": false
    },
    {
      "module": "Logout",
      "url": "#",
      "name": "Logout",
      "right": true,
      "loginRequired": true
    }
  ]
}
`
- users - user colletion 
`{
  "_id": {
    "$oid": "65a973b8f21fca96e2656030"
  },
  "username": "username",
  "firstname": "firstname",
  "lastname": "lastname",
  "password": "password@123"
  "__v": 0
}`

- cvs - user cvs
`
{
  "_id": {
    "$oid": "65a97c908b54bc1d469ada12"
  },
  "about": "about the candidate",
  "dob": "dob",
  "educations": [
    {
      "year": "10th",
      "value": 53
    },
    {
      "year": "12th",
      "value": 49
    },
    {
      "year": "BCA",
      "value": 82
    },
    {
      "year": "MCA",
      "value": 89
    }
  ],
  "exeperiences": [
    {
      "year": "Mintboook",
      "value": 2.2
    },
    {
      "year": "Litmusworld",
      "value": 1.1
    },
    {
      "year": "Happiestminds",
      "value": 2.1
    }
  ],
  "highestEdu": "Highest Education",
  "location": "Bangalore",
  "userId": {
    "$oid": "65a973b8f21fca96e2656030"
  }
}
`


