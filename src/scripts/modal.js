import { API_URL, FETCH_OPTIONS, RESULTS_PER_PAGE } from './config';

// export const state = {
//   search: { query: '', results: [] },
// };

export const state = {
  search: {
    query: '',
    results: [
      {
        id: '0009',
        name: 'assisted chest dip (kneeling)',
        category: 'chest',
        muscles: ['triceps', 'shoulders'],
        instructions: [
          'Adjust the machine to your desired height and secure your knees on the pad.',
          'Grasp the handles with your palms facing down and your arms fully extended.',
          'Lower your body by bending your elbows until your upper arms are parallel to the floor.',
          'Pause for a moment, then push yourself back up to the starting position.',
          'Repeat for the desired number of repetitions.',
        ],
        image: 'https://v2.exercisedb.io/image/fmdqpJ0us59Y9T',
      },
      {
        id: '2364',
        name: 'assisted wide-grip chest dip (kneeling)',
        category: 'chest',
        muscles: ['triceps', 'shoulders'],
        instructions: [
          'Adjust the machine to your desired height and secure your knees on the pad.',
          'Grasp the handles with a wide grip and keep your elbows slightly bent.',
          'Lower your body by bending your elbows until your upper arms are parallel to the floor.',
          'Push yourself back up to the starting position by extending your arms.',
          'Repeat for the desired number of repetitions.',
        ],
        image: 'https://v2.exercisedb.io/image/9sh8GAwoZtQeiv',
      },
      {
        id: '0989',
        name: 'band one arm twisting chest press',
        category: 'chest',
        muscles: ['shoulders', 'triceps'],
        instructions: [
          'Attach the band to a sturdy anchor point at chest height.',
          'Stand with your side facing the anchor point and grab the band with one hand.',
          'Step away from the anchor point to create tension in the band.',
          'Position your feet shoulder-width apart and slightly bend your knees.',
          'Bring your hand holding the band across your body, towards the opposite shoulder.',
          'While maintaining tension in the band, push your hand forward and away from your body, extending your arm.',
          'Slowly return to the starting position and repeat for the desired number of repetitions.',
          'Switch sides and repeat the exercise with the other hand.',
        ],
        image: 'https://v2.exercisedb.io/image/EzkN8409Qewbpa',
      },
      {
        id: '0039',
        name: 'barbell front chest squat',
        category: 'upper legs',
        muscles: ['quadriceps', 'hamstrings', 'calves', 'core'],
        instructions: [
          'Start by standing with your feet shoulder-width apart, toes slightly turned out.',
          'Hold the barbell in front of your chest with your hands shoulder-width apart, elbows pointing forward.',
          'Engage your core and keep your chest up as you lower your body down into a squat position, pushing your hips back and bending your knees.',
          'Lower until your thighs are parallel to the ground, or as low as you can comfortably go.',
          'Pause for a moment at the bottom, then push through your heels to return to the starting position.',
          'Repeat for the desired number of repetitions.',
        ],
        image: 'https://v2.exercisedb.io/image/o8JCmR3rBBPcN6',
      },
      {
        id: '1259',
        name: 'behind head chest stretch',
        category: 'chest',
        muscles: ['shoulders', 'triceps'],
        instructions: [
          'Stand tall with your feet shoulder-width apart.',
          'Interlace your fingers behind your head with your elbows pointing outwards.',
          'Slowly squeeze your shoulder blades together and push your chest forward.',
          'Hold the stretch for 15-30 seconds.',
          'Release the stretch and repeat as desired.',
        ],
        image: 'https://v2.exercisedb.io/image/729SjynT1bY6V0',
      },
      {
        id: '1262',
        name: 'cable one arm decline chest fly',
        category: 'chest',
        muscles: ['shoulders', 'triceps'],
        instructions: [
          'Attach a D-handle to a low pulley cable machine and set the bench to a decline angle.',
          'Lie down on the bench with your head towards the machine and grab the handle with your right hand.',
          'Extend your arm straight up above your chest, keeping a slight bend in your elbow.',
          'With a controlled motion, lower your arm out to the side until your hand is in line with your shoulder.',
          'Pause for a moment, then reverse the motion and bring your arm back to the starting position.',
          'Repeat for the desired number of repetitions, then switch to your left arm and repeat the exercise.',
        ],
        image: 'https://v2.exercisedb.io/image/OimtMgecre15dI',
      },
      {
        id: '2144',
        name: 'cable seated chest press',
        category: 'chest',
        muscles: ['shoulders', 'triceps'],
        instructions: [
          'Adjust the seat height and cable handles to a comfortable position.',
          'Sit on the bench with your back straight and feet flat on the floor.',
          'Grasp the cable handles with an overhand grip at shoulder height.',
          'Push the handles forward and away from your body, extending your arms fully.',
          'Pause for a moment, then slowly bring the handles back to the starting position.',
          'Repeat for the desired number of repetitions.',
        ],
        image: 'https://v2.exercisedb.io/image/VvGZ-i1l2dNYpR',
      },
      {
        id: '1270',
        name: 'cable upper chest crossovers',
        category: 'chest',
        muscles: ['deltoids', 'triceps'],
        instructions: [
          'Attach the handles to the cables at chest height.',
          'Stand in the center of the cable machine with one foot slightly in front of the other.',
          'Grasp the handles with your palms facing down and your arms extended out to the sides.',
          'Keep a slight bend in your elbows and engage your core.',
          'Pull the cables together in front of your chest, crossing them over each other.',
          'Squeeze your chest muscles at the peak of the movement.',
          'Slowly release the cables back to the starting position.',
          'Repeat for the desired number of repetitions.',
        ],
        image: 'https://v2.exercisedb.io/image/dfPwUHVATEL6Ry',
      },
      {
        id: '1271',
        name: 'chest and front of shoulder stretch',
        category: 'chest',
        muscles: ['deltoids'],
        instructions: [
          'Stand tall with your feet shoulder-width apart.',
          'Extend your arms straight out in front of you at shoulder height.',
          'Cross your arms in front of your body, with your right arm on top of your left arm.',
          'Interlace your fingers and press your palms together.',
          'Gently squeeze your shoulder blades together and push your hands forward, feeling a stretch in your chest and front of your shoulders.',
          'Hold the stretch for 20-30 seconds, then release.',
          'Repeat for the desired number of repetitions.',
        ],
        image: 'https://v2.exercisedb.io/image/zcQp67XdvufQFx',
      },
      {
        id: '0251',
        name: 'chest dip',
        category: 'chest',
        muscles: ['triceps', 'shoulders'],
        instructions: [
          'Position yourself on parallel bars with your arms fully extended and your body straight.',
          'Lower your body by bending your elbows until your shoulders are below your elbows.',
          'Push yourself back up to the starting position by straightening your arms.',
          'Repeat for the desired number of repetitions.',
        ],
        image: 'https://v2.exercisedb.io/image/KZPQNnB8-mWS71',
      },
      {
        id: '1430',
        name: 'chest dip (on dip-pull-up cage)',
        category: 'chest',
        muscles: ['triceps', 'shoulders'],
        instructions: [
          'Adjust the dip bars to a height that allows you to comfortably grip them.',
          'Stand between the bars and place your hands on each bar, slightly wider than shoulder-width apart.',
          'Jump up and straighten your arms, supporting your body weight on the bars.',
          'Bend your knees and cross your ankles behind you.',
          'Lower your body by bending your elbows, keeping your chest up and your shoulders down.',
          'Continue lowering until your shoulders are below your elbows or until you feel a stretch in your chest.',
          'Push through your palms and extend your elbows to raise your body back up to the starting position.',
          'Repeat for the desired number of repetitions.',
        ],
        image: 'https://v2.exercisedb.io/image/aT8PYj0OmoF4io',
      },
      {
        id: '2462',
        name: 'chest dip on straight bar',
        category: 'chest',
        muscles: ['triceps', 'shoulders'],
        instructions: [
          'Grab the parallel bars with your palms facing down and your arms fully extended.',
          'Bend your knees and cross your ankles.',
          'Lower your body by bending your arms until your shoulders are below your elbows.',
          'Push yourself back up to the starting position by straightening your arms.',
          'Repeat for the desired number of repetitions.',
        ],
        image: 'https://v2.exercisedb.io/image/Up1eAbmvZXgoXa',
      },
      {
        id: '1272',
        name: 'chest stretch with exercise ball',
        category: 'chest',
        muscles: ['shoulders', 'triceps'],
        instructions: [
          'Sit on the stability ball with your feet flat on the ground and your back straight.',
          'Hold the exercise ball with both hands and extend your arms straight out in front of you.',
          'Slowly bring the exercise ball towards your chest, feeling a stretch in your chest muscles.',
          'Hold the stretch for a few seconds, then slowly return to the starting position.',
          'Repeat for the desired number of repetitions.',
        ],
        image: 'https://v2.exercisedb.io/image/ILnf2GUcoD2pv0',
      },
      {
        id: '3216',
        name: 'chest tap push-up (male)',
        category: 'chest',
        muscles: ['triceps', 'shoulders'],
        instructions: [
          'Start in a high plank position with your hands slightly wider than shoulder-width apart and your body in a straight line.',
          'Lower your body towards the ground by bending your elbows, keeping them close to your sides.',
          'As you lower yourself, tap your chest with your right hand.',
          'Push yourself back up to the starting position.',
          'Repeat the movement, this time tapping your chest with your left hand.',
          'Continue alternating sides for the desired number of repetitions.',
        ],
        image: 'https://v2.exercisedb.io/image/jAZSbHcRY1mIGa',
      },
      {
        id: '1286',
        name: 'dumbbell one arm chest fly on exercise ball',
        category: 'chest',
        muscles: ['shoulders', 'triceps'],
        instructions: [
          'Sit on an exercise ball with a dumbbell in one hand and your feet flat on the ground.',
          'Walk your feet forward, rolling the ball until your upper back is supported on the ball and your head, neck, and shoulders are off the ball.',
          'Extend your arm with the dumbbell straight up above your chest, palm facing inward.',
          'Slowly lower the dumbbell out to the side, keeping a slight bend in your elbow.',
          'Pause for a moment when your arm is parallel to the ground.',
          'Engage your chest muscles to bring the dumbbell back up to the starting position.',
          'Repeat for the desired number of repetitions, then switch arms.',
        ],
        image: 'https://v2.exercisedb.io/image/AWJqZDoYfspK4Y',
      },
      {
        id: '1287',
        name: 'dumbbell one arm decline chest press',
        category: 'chest',
        muscles: ['triceps', 'shoulders'],
        instructions: [
          'Lie on a decline bench with a dumbbell in one hand, resting on your chest.',
          'Place your feet flat on the ground and keep your back pressed against the bench.',
          'Extend your arm and push the dumbbell up towards the ceiling, fully extending your elbow.',
          'Pause for a moment at the top, then slowly lower the dumbbell back down to the starting position.',
          'Repeat for the desired number of repetitions, then switch to the other arm.',
        ],
        image: 'https://v2.exercisedb.io/image/BxKWcCsM7DNos1',
      },
      {
        id: '1289',
        name: 'dumbbell one arm incline chest press',
        category: 'chest',
        muscles: ['shoulders', 'triceps'],
        instructions: [
          'Adjust the incline bench to a 45-degree angle.',
          'Sit on the bench with your back against the pad and feet flat on the ground.',
          'Hold a dumbbell in one hand with an overhand grip, resting it on your shoulder.',
          'Push the dumbbell up and away from your body, extending your arm fully.',
          'Pause for a moment at the top, then slowly lower the dumbbell back down to the starting position.',
          'Repeat for the desired number of repetitions, then switch to the other arm.',
        ],
        image: 'https://v2.exercisedb.io/image/SCbF3pe-7u2yG8',
      },
      {
        id: '1167',
        name: 'dynamic chest stretch (male)',
        category: 'chest',
        muscles: ['shoulders', 'triceps'],
        instructions: [
          'Stand tall with your feet shoulder-width apart.',
          'Extend your arms straight out to the sides, parallel to the ground.',
          'Slowly bring your arms forward, crossing them in front of your body.',
          'Feel the stretch in your chest muscles.',
          'Hold the stretch for 10-30 seconds.',
          'Return to the starting position and repeat for the desired number of repetitions.',
        ],
        image: 'https://v2.exercisedb.io/image/lAx2B4KmiNdxeD',
      },
      {
        id: '1418',
        name: 'hug keens to chest',
        category: 'upper legs',
        muscles: ['hamstrings', 'quadriceps'],
        instructions: [
          'Start by standing with your feet shoulder-width apart.',
          'Bend your knees and lower your body down into a squat position.',
          'As you squat down, bring your knees up towards your chest and hug them with your arms.',
          'Hold this position for a moment, then slowly return to the starting position.',
          'Repeat for the desired number of repetitions.',
        ],
        image: 'https://v2.exercisedb.io/image/iiplI5RgascoqW',
      },
      {
        id: '1297',
        name: 'isometric chest squeeze',
        category: 'chest',
        muscles: ['triceps', 'shoulders'],
        instructions: [
          'Stand with your feet shoulder-width apart and your knees slightly bent.',
          'Extend your arms straight out in front of you, parallel to the ground, with your palms facing each other.',
          'Squeeze your chest muscles together as hard as you can, while keeping your arms straight.',
          'Hold this position for a few seconds, focusing on contracting your chest muscles.',
          'Release the squeeze and relax your chest muscles.',
          'Repeat for the desired number of repetitions.',
        ],
        image: 'https://v2.exercisedb.io/image/W7E12iX-kkctcR',
      },
      {
        id: '0577',
        name: 'lever chest press',
        category: 'chest',
        muscles: ['triceps', 'shoulders'],
        instructions: [
          'Adjust the seat height and position yourself on the machine with your back flat against the pad.',
          'Grasp the handles with an overhand grip and position your elbows at a 90-degree angle.',
          'Push the handles forward until your arms are fully extended, exhaling during the movement.',
          'Pause briefly at the end of the movement, then slowly return to the starting position, inhaling as you do so.',
          'Repeat for the desired number of repetitions.',
        ],
        image: 'https://v2.exercisedb.io/image/MD4JZRRg2nHXBv',
      },
      {
        id: '0576',
        name: 'lever chest press',
        category: 'chest',
        muscles: ['triceps', 'shoulders'],
        instructions: [
          'Adjust the seat height and position yourself on the machine with your back flat against the pad.',
          'Grasp the handles with an overhand grip and position your elbows at a 90-degree angle.',
          'Push the handles forward until your arms are fully extended, exhaling during the movement.',
          'Pause briefly at the end of the movement, then slowly return to the starting position, inhaling as you do so.',
          'Repeat for the desired number of repetitions.',
        ],
        image: 'https://v2.exercisedb.io/image/c93pnhCZtyAiBl',
      },
      {
        id: '1300',
        name: 'lever decline chest press',
        category: 'chest',
        muscles: ['triceps', 'shoulders'],
        instructions: [
          'Adjust the seat height and backrest of the leverage machine to a comfortable position.',
          'Sit on the machine with your back against the backrest and your feet flat on the floor.',
          'Grasp the handles with an overhand grip and position your hands slightly wider than shoulder-width apart.',
          'Push the handles forward and away from your body until your arms are fully extended.',
          'Slowly lower the handles back towards your chest, keeping your elbows slightly bent.',
          'Pause for a moment at the bottom, then push the handles back to the starting position.',
          'Repeat for the desired number of repetitions.',
        ],
        image: 'https://v2.exercisedb.io/image/yq-twB81KUzZI4',
      },
      {
        id: '1299',
        name: 'lever incline chest press',
        category: 'chest',
        muscles: ['shoulders', 'triceps'],
        instructions: [
          'Adjust the seat and backrest of the leverage machine to a comfortable position.',
          'Sit on the machine with your back against the backrest and your feet flat on the floor.',
          'Grasp the handles with an overhand grip and position your hands slightly wider than shoulder-width apart.',
          'Push the handles forward and away from your body until your arms are fully extended.',
          'Pause for a moment, then slowly bend your elbows and lower the handles back towards your chest.',
          'Repeat for the desired number of repetitions.',
        ],
        image: 'https://v2.exercisedb.io/image/MBscICySsjQSWN',
      },
      {
        id: '1479',
        name: 'lever incline chest press v. 2',
        category: 'chest',
        muscles: ['triceps', 'shoulders'],
        instructions: [
          'Adjust the seat height and backrest angle on the leverage machine to a comfortable position.',
          'Sit on the machine with your back against the backrest and your feet flat on the floor.',
          'Grasp the handles with an overhand grip and position your hands slightly wider than shoulder-width apart.',
          'Push the handles forward and away from your body until your arms are fully extended, but without locking your elbows.',
          'Pause for a moment at the fully extended position, then slowly bend your elbows and lower the handles back towards your chest.',
          'Repeat for the desired number of repetitions.',
        ],
        image: 'https://v2.exercisedb.io/image/-L2SFZfik6NStn',
      },
      {
        id: '0595',
        name: 'lever seated crunch (chest pad)',
        category: 'waist',
        muscles: ['obliques'],
        instructions: [
          'Adjust the seat height and chest pad position according to your comfort.',
          'Sit on the machine with your back against the chest pad and your feet flat on the floor.',
          'Grasp the handles or side bars for stability.',
          'Engage your abs and slowly lean back, allowing the chest pad to move with you.',
          'Pause for a moment at the maximum contraction, feeling the tension in your abs.',
          'Slowly return to the starting position by contracting your abs and pulling yourself back up.',
          'Repeat for the desired number of repetitions.',
        ],
        image: 'https://v2.exercisedb.io/image/nYQBT6raDbmbbi',
      },
      {
        id: '3758',
        name: 'lever standing chest press',
        category: 'chest',
        muscles: ['shoulders', 'triceps'],
        instructions: [
          'Adjust the seat height and position yourself on the machine with your feet flat on the ground.',
          'Grasp the handles with an overhand grip and position your hands at chest level.',
          'Push the handles forward until your arms are fully extended, keeping your elbows slightly bent.',
          'Pause for a moment, then slowly bring the handles back towards your chest, maintaining control throughout the movement.',
          'Repeat for the desired number of repetitions.',
        ],
        image: 'https://v2.exercisedb.io/image/O2LFTUpOukWoCe',
      },
      {
        id: '1301',
        name: 'machine inner chest press',
        category: 'chest',
        muscles: ['triceps', 'shoulders'],
        instructions: [
          'Adjust the seat height and position yourself on the machine with your back flat against the pad.',
          'Grasp the handles with an overhand grip and position your elbows at a 90-degree angle.',
          'Push the handles forward until your arms are fully extended, exhaling during the movement.',
          'Pause for a moment at the end of the movement, then slowly return to the starting position, inhaling as you do so.',
          'Repeat for the desired number of repetitions.',
        ],
        image: 'https://v2.exercisedb.io/image/4OTc0-FgfbQ9Nw',
      },
      {
        id: '1302',
        name: 'medicine ball chest pass',
        category: 'chest',
        muscles: ['shoulders', 'triceps'],
        instructions: [
          'Stand with your feet shoulder-width apart, holding the medicine ball at chest level.',
          'Extend your arms forward, pushing the medicine ball away from your chest with force.',
          'As you release the ball, follow through with your arms and torso, transferring your weight from your back foot to your front foot.',
          'Catch the ball as it rebounds off the wall or partner, and immediately repeat the movement.',
          'Continue for the desired number of repetitions.',
        ],
        image: 'https://v2.exercisedb.io/image/DTlkbOX926vu5b',
      },
      {
        id: '1303',
        name: 'medicine ball chest push from 3 point stance',
        category: 'chest',
        muscles: ['shoulders', 'triceps'],
        instructions: [
          'Start in a 3 point stance with one hand on the medicine ball and the other hand on the ground.',
          'Extend your legs and position your body in a straight line.',
          'Lower your chest towards the ground while keeping your back straight.',
          'Push the medicine ball away from your body, extending your arm fully.',
          'Return to the starting position and repeat for the desired number of repetitions.',
        ],
        image: 'https://v2.exercisedb.io/image/xh02HLPILfD1iV',
      },
      {
        id: '1304',
        name: 'medicine ball chest push multiple response',
        category: 'chest',
        muscles: ['triceps', 'shoulders'],
        instructions: [
          'Stand with your feet shoulder-width apart, holding a medicine ball at chest level.',
          'Extend your arms forward, pushing the medicine ball away from your chest.',
          'Pause for a moment, then slowly bring the medicine ball back to your chest.',
          'Repeat for the desired number of repetitions.',
        ],
        image: 'https://v2.exercisedb.io/image/-Lo1eFNF1V5WAm',
      },
      {
        id: '1305',
        name: 'medicine ball chest push single response',
        category: 'chest',
        muscles: ['triceps', 'shoulders'],
        instructions: [
          'Stand with your feet shoulder-width apart, holding the medicine ball at chest level.',
          'Extend your arms forward, pushing the medicine ball away from your chest.',
          'Pause for a moment, then slowly bring the medicine ball back to your chest.',
          'Repeat for the desired number of repetitions.',
        ],
        image: 'https://v2.exercisedb.io/image/s8-rQWaHz39KOP',
      },
      {
        id: '1312',
        name: 'medicine ball chest push with run release',
        category: 'chest',
        muscles: ['triceps', 'shoulders', 'core'],
        instructions: [
          'Stand with your feet shoulder-width apart, holding a medicine ball at chest level.',
          'Step forward with your right foot and simultaneously push the medicine ball forward, extending your arms fully.',
          'As you push the ball forward, release it and let it roll forward.',
          'Quickly run forward and catch the ball before it hits the ground.',
          'Once you catch the ball, bring it back to your chest and repeat the movement with your left foot forward.',
          'Continue alternating legs and repeating the exercise for the desired number of repetitions.',
        ],
        image: 'https://v2.exercisedb.io/image/RF7Zntwx5KVAdo',
      },
      {
        id: '1750',
        name: 'medicine ball supine chest throw',
        category: 'upper arms',
        muscles: ['chest', 'shoulders'],
        instructions: [
          'Lie flat on your back on a bench with your knees bent and feet flat on the ground.',
          'Hold the medicine ball with both hands, extending your arms straight up above your chest.',
          'Lower the medicine ball towards your chest, keeping your elbows close to your body.',
          'Explosively push the medicine ball upwards, extending your arms fully and throwing the ball as high as possible.',
          'Catch the medicine ball and repeat for the desired number of repetitions.',
        ],
        image: 'https://v2.exercisedb.io/image/kXwgQ7uqhKFqMk',
      },
      {
        id: '3124',
        name: 'resistance band seated chest press',
        category: 'chest',
        muscles: ['shoulders', 'triceps'],
        instructions: [
          'Sit on a chair or bench with your back straight and feet flat on the ground.',
          'Hold the resistance band handles in each hand, with your palms facing down and elbows bent at a 90-degree angle.',
          'Extend your arms forward, pushing the resistance band away from your chest.',
          'Pause for a moment at the end of the movement, then slowly return to the starting position.',
          'Repeat for the desired number of repetitions.',
        ],
        image: 'https://v2.exercisedb.io/image/E60L9IS7dccBMn',
      },
      {
        id: '3679',
        name: 'sit-up with arms on chest',
        category: 'waist',
        muscles: ['hip flexors'],
        instructions: [
          'Lie flat on your back with your knees bent and feet flat on the ground.',
          'Cross your arms over your chest.',
          'Engaging your abs, lift your upper body off the ground towards your knees.',
          'Pause for a moment at the top, then slowly lower your upper body back down to the starting position.',
          'Repeat for the desired number of repetitions.',
        ],
        image: 'https://v2.exercisedb.io/image/JJbkZg4iQevJY1',
      },
      {
        id: '2363',
        name: 'wide-grip chest dip on high parallel bars',
        category: 'chest',
        muscles: ['triceps', 'shoulders'],
        instructions: [
          'Position yourself on the parallel bars with your arms fully extended and your body suspended in the air.',
          'Lean forward slightly and lower your body by bending your elbows until your chest is just above the bars.',
          'Pause for a moment, then push yourself back up to the starting position by straightening your arms.',
          'Repeat for the desired number of repetitions.',
        ],
        image: 'https://v2.exercisedb.io/image/yuExjpSwkU5TOR',
      },
    ],
    resultsPerPage: RESULTS_PER_PAGE,
    page: 1,
  },
};

export const loadSearchResultsByName = async function (query) {
  try {
    state.search.query = query;

    // const response = await fetch(
    //   `${API_URL}name/${query}?limit=00&offset=0`,
    //   FETCH_OPTIONS
    // );

    // const response = await fetch('./data.json');
    // if (!response.ok) throw new Error('Request Error');

    // const result = await response.json();
    // if (result.length === 0) throw new Error('Not found');

    // state.search.results = result.map(exercise => {
    //   return {
    //     id: exercise.id,
    //     name: exercise.name,
    //     category: exercise.bodyPart,
    //     muscles: exercise.secondaryMuscles,
    //     instructions: exercise.instructions,
    //     image: exercise.gifUrl,
    //   };
    // });

    // console.log(state.search.results);
  } catch (error) {
    console.error(error);
  }
};

export const loadSearchResultsByCategory = async function (query) {
  try {
    state.search.query = query;

    // const response = await fetch(
    //   `${API_URL}bodyPart/${query}?limit=0&offset=0`,
    //   FETCH_OPTIONS
    // );
    // if (!response.ok) throw new Error('Request Error');

    // const result = await response.json();
    // if (result.length === 0) throw new Error('Not found');

    state.search.results = result.map(exercise => {
      return {
        id: exercise.id,
        name: exercise.name,
        category: exercise.bodyPart,
        muscles: exercise.secondaryMuscles,
        instructions: exercise.instructions,
        image: exercise.gifUrl,
      };
    });
  } catch (error) {
    console.error(error);
  }
};

export const getSearchResults = function (page = state.search.page) {
  state.search.page = page;

  const start = (page - 1) * state.search.resultsPerPage;
  const end = page * state.search.resultsPerPage;

  return state.search.results.slice(start, end);
};
