import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native';
import tailwind from 'tailwind-react-native-classnames';
import Icon from 'react-native-vector-icons/Ionicons';

const SummaryScreen = () => {
  return (
    <ScrollView contentContainerStyle={tailwind`bg-gray-900 p-4 flex-grow top-10`}>
      <View style={tailwind`flex-row items-center justify-between mb-6 p-2`}>

        <TouchableOpacity style={tailwind`p-2`}>
          <Icon name="arrow-back" size={25} color="white" />
        </TouchableOpacity>

        <View style={tailwind`flex-1 ml-4 p-2 flex-row items-center`}>
        <Text style={[
          tailwind`text-white text-lg`,
          {
          fontFamily: 'Montserrat',
          fontSize: 16,
          fontWeight: '600',
          lineHeight: 19.5,
          letterSpacing: 1.5,
          textUnderlinePosition: 'from-font',
          textDecorationSkipInk: 'none'
          }
        ]}>
          Summary
        </Text>
        </View>
        <Image source={require('../../assets/images/shop.png')} style={tailwind`w-6 h-6 p-2 m-2`} />
      </View>

      <View style={tailwind`bg-gray-800 rounded-lg p-4 mb-6 shadow-lg flex-row items-center mt-2`}>
        <Image source={require('../../assets/images/monk.png')} style={tailwind`w-20 h-20 rounded-full mr-4`} />
        <View>
          <Text style={tailwind`text-gray-400 text-sm`}>Upcoming Booking</Text>
          <Text style={tailwind`text-white text-lg font-bold`}>From Riyadh to Jeddah</Text>
          <Text style={tailwind`text-gray-400 mt-2`}>At: 12:00 PM</Text>
        </View>
      </View>

      <View style={tailwind`flex-row justify-around mb-5`}>
        {['Daily', 'Weekly', 'Monthly', 'Yearly'].map((tab, index) => (
          <TouchableOpacity
            key={index}
            style={[
              tailwind`rounded-full py-2 px-6`,
              index === 0 ? tailwind`bg-yellow-500` : tailwind`bg-gray-800`
            ]}
          >
            <Text style={index === 0 ? tailwind`text-white font-bold` : tailwind`text-gray-400`}>{tab}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={tailwind`flex-row justify-between items-center mb-6`}>
        {[1, 2, 4, 5, 6, 7].map((day) => (
          <TouchableOpacity
        key={day}
        style={[
          tailwind`rounded-full p-2`,
          day === 4 ? tailwind`bg-yellow-500` : tailwind`bg-gray-900`,
          { width: 40, height: 40, justifyContent: 'center', alignItems: 'center' }
        ]}
          >
        <Text style={day === 4 ? tailwind`text-white font-bold` : tailwind`text-gray-400`}>{day}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={tailwind`flex-row flex-wrap justify-between`}>
        {['Total Trips', 'Total kilometers', 'Total hours\nworked', 'Total earnings'].map((title, index) => (
          <View
        key={index}
        style={[
          tailwind`rounded-3xl p-4 mb-6 shadow-lg`,
          { width: '48%', backgroundColor: '#1B2751' }
        ]}
          >
        <View style={tailwind`flex-row justify-between mb-2 items-center`}>
          <Text style={tailwind`text-gray-400 text-sm`}>{title}</Text>
          <Text style={tailwind`text-yellow-500 text-2xl`}>↗</Text>
        </View>
        <Text style={tailwind`text-white text-2xl font-bold mb-2`}>
          {['4 TRIPS', '150 KM', '10 HOURS', 'SAR 7000'][index]}
        </Text>
        <Text style={tailwind`text-gray-400 text-xs`}>Including local and out of cities</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

export default SummaryScreen;
