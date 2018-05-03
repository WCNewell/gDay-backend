
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('student').del()
    .then(function () {
      // Inserts seed entries
      return knex('student').insert([
        {
         name: 'Savannah Adams', 
         email: 'savannah.adams0@gmail.com', 
         image: 'https://i.imgur.com/KNx6jMW.jpg',
         bio: 'Ambitious full stack developer, with a background in linguistics and language.',
         employer: 'Careerstudents.com',
         title: 'full-stack developer', 
         password: 'password',
         cohort: '75'
        },
        {
          name: 'Ryan Hackemer',
          email: 'rhackemer@gmail.com',
          image: 'https://i.imgur.com/wYePoDC.png?2',
          bio: 'Talented full snack developer. Specialize in everything from pretzels to dried fruits. I can also code.',
          employer: 'Freelance',
          title: 'Full-stack Developer',
          password: 'password',
          cohort: '75'
        },
        {
          name: 'William Clark Newell',
          email: 'williamcnewell@gmail.com',
          image: 'https://i.imgur.com/Crll06E.jpg',
          bio: 'Total Xennial, full stack developer, musician, German bilingual, with years of managerial experience.',
          employer: 'Ableton Live',
          title: 'Full-stack Developer',
          password: 'password',
          cohort: '75'
        },
        {
          name: 'James Truitt',
          email: 'tru@rockyagirl.com',
          image: 'https://i.imgur.com/kfLGo2a.png',
          bio: 'I am Tru!',
          employer: 'Rockyagirl.com',
          title: 'Full-stack Developer',
          password: 'password',
          cohort: '70'
        },
      ]);
    });
};
