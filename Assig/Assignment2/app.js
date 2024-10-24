import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';

const ProfileScreen = () => {
  return (
    <ScrollView style={styles.container}>
      {/* Profile Section */}
      <View style={styles.profileSection}>
        <Text style={styles.profileHeader}>My Profile</Text>
        <View style={styles.profileInfo}>
          <Image
            source={{ uri: 'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/f996d445aa2c11bc4f714e9c6362b459' }} // Replace with actual image
            style={styles.profileImage}
          />
          <Text style={styles.profileName}>Uzair Naveed</Text>
          <View style={styles.statsSection}>
            <View style={styles.stat}>
              <Text style={styles.statNumber}>14.850</Text>
              <Text style={styles.statLabel}>Product Sells</Text>
            </View>
            <View style={styles.stat}>
              <Text style={styles.statNumber}>30bil+</Text>
              <Text style={styles.statLabel}>Earning</Text>
            </View>
          </View>
        </View>
      </View>

      {/* Recent Orders Section */}
      <View style={styles.recentOrdersSection}>
        <View style={styles.recentOrdersHeader}>
          <Text style={styles.recentOrdersTitle}>Recent Orders</Text>
          <Text style={styles.seeAll}>See All</Text>
        </View>
        {/* Order Item */}
        <View style={styles.orderItem}>
          <Image
            source={{ uri: 'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/6d48173e39139b730fe552e37bcd136d' }} // Replace with actual image
            style={styles.orderImage}
          />
          <View style={styles.orderInfo}>
            <Text style={styles.orderName}>Beef Burger, Ice Cream, Berries</Text>
            <Text style={styles.orderDate}>21, Thu 10:00</Text>
          </View>
          <Text style={styles.orderPrice}>$38.15</Text>
        </View>
        {/* Repeat Order Items for more orders */}
        <View style={styles.orderItem}>
          <Image
            source={{ uri: 'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/6d48173e39139b730fe552e37bcd136d' }} // Replace with actual image
            style={styles.orderImage}
          />
          <View style={styles.orderInfo}>
            <Text style={styles.orderName}>Beef Burger, Peparini Moo, Cheese Bust</Text>
            <Text style={styles.orderDate}>15, Fri 18:00</Text>
          </View>
          <Text style={styles.orderPrice}>$38.15</Text>
        </View>
        <View style={styles.orderItem}>
          <Image
            source={{ uri: 'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/6d48173e39139b730fe552e37bcd136d' }} // Replace with actual image
            style={styles.orderImage}
          />
          <View style={styles.orderInfo}>
            <Text style={styles.orderName}>Beef Burger, Ketchup, French Fries</Text>
            <Text style={styles.orderDate}>11, Mon 10:00</Text>
          </View>
          <Text style={styles.orderPrice}>$30.50</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#FFFBEA',
  },
  profileSection: {
    backgroundColor: '#F6E3C3',
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
  },
  profileHeader: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  profileInfo: {
    alignItems: 'center',
    marginTop: 10,
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 10,
  },
  profileName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  statsSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    width: '100%',
  },
  stat: {
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  statLabel: {
    color: 'gray',
  },
  recentOrdersSection: {
    backgroundColor: '#F6E3C3',
    borderRadius: 10,
    padding: 20,
  },
  recentOrdersHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  recentOrdersTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  seeAll: {
    color: 'gray',
  },
  orderItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
    backgroundColor: '#000',
    borderRadius: 10,
    padding: 10,
  },
  orderImage: {
    width: 50,
    height: 50,
    borderRadius: 10,
  },
  orderInfo: {
    flex: 1,
    marginLeft: 10,
  },
  orderName: {
    color: '#FFF',
    fontSize: 14,
  },
  orderDate: {
    color: 'gray',
  },
  orderPrice: {
    color: '#FFF',
    fontWeight: 'bold',
  },
});

export default ProfileScreen;