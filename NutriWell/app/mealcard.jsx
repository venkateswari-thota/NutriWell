// import React, { useRef } from 'react';
// import {
//   Animated,
//   Pressable,
//   Text,
//   View,
//   Image,
//   StyleSheet,
// } from 'react-native';

// export default function MealCard({ meal, router }) {
//   const scale = useRef(new Animated.Value(1)).current;

//   const handlePressIn = () => {
//     Animated.spring(scale, {
//       toValue: 1.05,
//       useNativeDriver: true,
//     }).start();
//   };

//   const handlePressOut = () => {
//     Animated.spring(scale, {
//       toValue: 1,
//       useNativeDriver: true,
//     }).start();
//   };

//   const handlePress = () => {
//     router.push({ pathname: '/mealdetails', params: { meal: JSON.stringify(meal) } });
//   };

//   return (
//     <Pressable
//       onPressIn={handlePressIn}
//       onPressOut={handlePressOut}
//       onPress={handlePress}
//     >
//       <Animated.View style={[styles.card, { transform: [{ scale }] }]}>
//         <View style={styles.content}>
//           <Image source={meal.image} style={styles.image} />
//           <View style={styles.info}>
//             <Text style={styles.title}>{meal.name}</Text>
//             <Text style={styles.sub}>{meal.time} • {meal.calories} kcal</Text>
//           </View>
//         </View>
//       </Animated.View>
//     </Pressable>
//   );
// }

// const styles = StyleSheet.create({
//   card: {
//     marginBottom: 16,
//     borderRadius: 12,
//     overflow: 'hidden',
//     elevation: 4,
//     backgroundColor: '#8c6ab8',
//     padding: 12,
//   },
//   content: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   image: {
//     width: 90,
//     height: 90,
//     borderRadius: 10,
//     marginRight: 12,
//   },
//   info: {
//     flex: 1,
//   },
//   title: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     color: '#f3e5f5',
//   },
//   sub: {
//     fontSize: 14,
//     color: '#d1c4e9',
//     marginTop: 4,
//   },
// });




import React, { useRef } from 'react';
import {
  Animated,
  Pressable,
  Text,
  View,
  Image,
  StyleSheet,
} from 'react-native';

export default function MealCard({ meal, router }) {
  const scale = useRef(new Animated.Value(1)).current;

  const handlePressIn = () => {
    Animated.spring(scale, {
      toValue: 1.05,
      useNativeDriver: true,
    }).start();
  };

  const handlePressOut = () => {
    Animated.spring(scale, {
      toValue: 1,
      useNativeDriver: true,
    }).start();
  };

  const handlePress = () => {
    router.push({ pathname: '/mealdetails', params: { meal: JSON.stringify(meal) } });
  };

  return (
    <Pressable
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      onPress={handlePress}
    >
      <Animated.View style={[styles.card, { transform: [{ scale }] }]}>
        <View style={styles.content}>
          {meal.base64Image ? (
            <Image 
              source={{ uri: `data:image/jpeg;base64,${meal.base64Image}` }} 
              style={styles.image} 
            />
          ) : (
            <View style={[styles.image, styles.imagePlaceholder]} />
          )}
          <View style={styles.info}>
            <Text style={styles.title}>{meal.name}</Text>
            <Text style={styles.sub}>{meal.time} • {meal.calories}</Text>
          </View>
        </View>
      </Animated.View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  content: {
    flexDirection: 'row',
    padding: 12,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 8,
    marginRight: 12,
  },
  imagePlaceholder: {
    backgroundColor: '#eee',
  },
  info: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
    color: '#333',
  },
  sub: {
    fontSize: 14,
    color: '#666',
  },
});