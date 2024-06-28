import { Colors } from "../theme";

export const moduleData = [
    {
      id: '1',
      title: 'Digital Shopper Journey',
      progress: '4 Learning hours left',
      imageSource: require('../assets/images/moduleCardImage.png'),
      onPress: () => navigation.navigate('Module'),
      progressBarColor: Colors.primary,
      progressPercentage: '90%',
      progressBarFill: 0.9,
    },
    // Add more items as needed
    {
      id: '2',
      title: 'Digital Shopper Journey',
      progress: '2 Learning hours left',
      imageSource: require('../assets/images/moduleCardImage.png'),
      onPress: () => navigation.navigate('AnotherModule'),
      progressBarColor: Colors.secondary,
      progressPercentage: '50%',
      progressBarFill: 0.5,
    },
    {
      id: '3',
      title: 'Digital Shopper Journey',
      progress: '1 Learning hour left',
      imageSource: require('../assets/images/moduleCardImage.png'),
      onPress: () => navigation.navigate('ThirdModule'),
      progressBarColor: Colors.primary,
      progressPercentage: '75%',
      progressBarFill: 0.75,
    },
  ];

  export const moduleData2 = [
    {
      id: '1',
      title: 'Digital Shopper Journey',
      progress: '4 Learning completed',
      imageSource: require('../assets/images/moduleCardImage.png'),
      onPress: () => navigation.navigate('Module'),

    },
    {
      id: '2',
      title: 'Digital Shopper Journey',
      progress: '2 Learning hours completed',
      imageSource: require('../assets/images/moduleCardImage.png'),
      onPress: () => navigation.navigate('AnotherModule'),
 
    },
    {
      id: '3',
      title: 'Digital Shopper Journey',
      progress: '1 Learning completed',
      imageSource: require('../assets/images/moduleCardImage.png'),
      onPress: () => navigation.navigate('ThirdModule'),

    },
   
  ];

  export const moduleData3 = [
    {
      id: '1',
      title: 'Digital Shopper Journey',
      progress: '4 Learning hours left',
      imageSource: require('../assets/images/moduleCardImage.png'),
      onPress: () => navigation.navigate('Module'),
      progressBarColor: Colors.primary,
      progressBarFill: 0.3,
    },

    {
      id: '2',
      title: 'Digital Shopper Journey',
      progress: '2 Learning hours left',
      imageSource: require('../assets/images/moduleCardImage.png'),
      onPress: () => navigation.navigate('AnotherModule'),

    },
    {
      id: '3',
      title: 'Digital Shopper Journey',
      progress: '1 Learning hour left',
      imageSource: require('../assets/images/moduleCardImage.png'),
      onPress: () => navigation.navigate('ThirdModule'),

    },
  ];
