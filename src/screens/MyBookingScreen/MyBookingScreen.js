import React, { useState, useMemo } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  FlatList,
  StatusBar,
  Platform,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { goBack, navigate } from '../../navigation/NavigationService';
import { styles } from './styles';

// ─── Constants ────────────────────────────────────────────────────────────────

const COLORS = {
  bg: '#0a0a0a',
  card: '#111',
  border: '#2a2a2a',
  borderSubtle: '#1e1e1e',
  yellow: '#FFD600',
  yellowBg: '#1a1a00',
  yellowBorder: '#FFD600',
  green: '#4CAF50',
  greenBg: '#1a2a1a',
  red: '#EF5350',
  redBg: '#2a1a1a',
  purple: '#7986CB',
  purpleBg: '#1a1a2e',
  white: '#fff',
  textPrimary: '#fff',
  textSecondary: '#888',
  textMuted: '#666',
  textDim: '#555',
};

const TABS = ['All', 'Upcoming', 'Completed', 'Cancelled'];

const FILTER_CHIPS = [
  'All services',
  'Car wash',
  'Servicing',
  'Repair',
  'Insurance',
];

const BOOKINGS = [
  {
    id: 'HSR-294810',
    name: 'Standard Service',
    type: 'Servicing',
    date: 'Today · 11:00 AM',
    status: 'ongoing',
    duration: '~2 hrs left',
    location: 'Vivek Khand',
    price: null,
    rating: null,
    note: 'Technician is currently servicing your car',
  },
  {
    id: 'HSR-294901',
    name: 'Premium Car Wash',
    type: 'Car wash',
    date: 'Sat 19 May · 9:00 AM',
    status: 'upcoming',
    duration: '~1 hr',
    location: 'Vivek Khand',
    price: '₹69',
    rating: null,
    note: null,
  },
  {
    id: 'HSR-291234',
    name: 'Comprehensive Service',
    type: 'Servicing',
    date: '12 May · 10:00 AM',
    status: 'completed',
    duration: '8 hrs',
    location: 'Vivek Khand',
    price: '₹4,999',
    rating: 4,
    note: null,
  },
  {
    id: 'HSR-288712',
    name: 'Basic Car Wash',
    type: 'Car wash',
    date: '5 May · 9:00 AM',
    status: 'completed',
    duration: '1 hr',
    location: 'Vivek Khand',
    price: '₹69',
    rating: 5,
    note: null,
  },
  {
    id: 'HSR-285310',
    name: 'Referral Reward',
    type: 'Reward',
    date: '1 May · Credited',
    status: 'credited',
    duration: null,
    location: null,
    price: '+₹50 petrol',
    rating: null,
    note: 'Rahul K. joined',
  },
  {
    id: 'HSR-279041',
    name: 'Specific Repair',
    type: 'Repair',
    date: '28 Apr · Cancelled',
    status: 'cancelled',
    duration: null,
    location: 'Vivek Khand',
    price: null,
    rating: null,
    note: 'Cancelled by you',
  },
];

// ─── Status Config ─────────────────────────────────────────────────────────────

const STATUS_CONFIG = {
  ongoing: { label: 'Ongoing', bg: '#1a1a2e', color: '#7986CB' },
  upcoming: { label: 'Upcoming', bg: '#1a1a00', color: '#FFD600' },
  completed: { label: 'Completed', bg: '#1a2a1a', color: '#4CAF50' },
  credited: { label: 'Credited', bg: '#1a2a1a', color: '#4CAF50' },
  cancelled: { label: 'Cancelled', bg: '#2a1a1a', color: '#EF5350' },
};

const SERVICE_ICON_CONFIG = {
  ongoing: { bg: '#1a1a2e', color: '#7986CB', icon: '🔧' },
  upcoming: { bg: '#1a1a00', color: '#FFD600', icon: '🚗' },
  completed: { bg: '#1a2a1a', color: '#4CAF50', icon: '✅' },
  credited: { bg: '#1a2a1a', color: '#4CAF50', icon: '⛽' },
  cancelled: { bg: '#2a1a1a', color: '#EF5350', icon: '🔧' },
};

// ─── Sub-components ───────────────────────────────────────────────────────────

const StatusBadge = ({ status }) => {
  const config = STATUS_CONFIG[status] || STATUS_CONFIG.upcoming;
  return (
    <View style={[styles.statusBadge, { backgroundColor: config.bg }]}>
      <Text style={[styles.statusText, { color: config.color }]}>
        {config.label}
      </Text>
    </View>
  );
};

const StarRating = ({ rating }) => (
  <View style={styles.ratingRow}>
    {[1, 2, 3, 4, 5].map(i => (
      <Text key={i} style={i <= rating ? styles.starFilled : styles.starEmpty}>
        ★
      </Text>
    ))}
    <Text style={styles.ratingLabel}>You rated {rating}/5</Text>
  </View>
);

const MetaItem = ({ icon, label }) => (
  <View style={styles.metaItem}>
    <Text style={styles.metaIcon}>{icon}</Text>
    <Text style={styles.metaText}>{label}</Text>
  </View>
);

// ─── Booking Card ─────────────────────────────────────────────────────────────

const BookingCard = ({ item }) => {
  const iconCfg = SERVICE_ICON_CONFIG[item.status];
  const isOngoing = item.status === 'ongoing';
  const isUpcoming = item.status === 'upcoming';
  const isCompleted = item.status === 'completed';
  const isCredited = item.status === 'credited';
  const isCancelled = item.status === 'cancelled';

  return (
    <View
      style={[
        styles.bookingCard,
        isOngoing && { borderColor: COLORS.purple },
        isCancelled && { opacity: 0.7 },
      ]}
    >
      {/* Top row */}
      <View style={styles.cardTop}>
        <View style={styles.cardLeft}>
          <View style={[styles.serviceIcon, { backgroundColor: iconCfg.bg }]}>
            <Text style={styles.serviceIconText}>{iconCfg.icon}</Text>
          </View>
          <View style={{ flex: 1 }}>
            <Text style={styles.bookingIdText}>#{item.id}</Text>
            <Text style={styles.bookingName}>{item.name}</Text>
            <View style={styles.dateRow}>
              <Text style={styles.calIcon}>📅 </Text>
              <Text style={styles.bookingDate}>{item.date}</Text>
            </View>
          </View>
        </View>
        <StatusBadge status={item.status} />
      </View>

      {/* Ongoing bar */}
      {isOngoing && item.note && (
        <View style={styles.ongoingBar}>
          <View style={styles.ongoingDot} />
          <Text style={styles.ongoingText}>{item.note}</Text>
        </View>
      )}

      {/* Rating */}
      {isCompleted && item.rating && <StarRating rating={item.rating} />}

      {/* Divider */}
      <View style={styles.divider} />

      {/* Bottom row */}
      <View style={styles.cardBottom}>
        <View style={styles.metaRow}>
          {item.duration && <MetaItem icon="⏱" label={item.duration} />}
          {item.location && <MetaItem icon="📍" label={item.location} />}
          {isCredited && item.note && <MetaItem icon="👥" label={item.note} />}
          {isCancelled && item.note && (
            <Text style={[styles.metaText, { color: COLORS.red }]}>
              ⓘ {item.note}
            </Text>
          )}
        </View>

        <View style={styles.cardActions}>
          {/* Price */}
          {item.price && !isUpcoming && (
            <Text
              style={[styles.cardPrice, isCredited && { color: COLORS.green }]}
            >
              {item.price}
            </Text>
          )}

          {/* Ongoing: track */}
          {isOngoing && (
            <TouchableOpacity
              style={styles.trackBtn}
              onPress={() => navigate('TrackBooking', { id: item.id })}
            >
              <Text style={styles.trackBtnText}>Track →</Text>
            </TouchableOpacity>
          )}

          {/* Upcoming: cancel + reschedule */}
          {isUpcoming && (
            <View style={styles.actionRow}>
              <TouchableOpacity style={styles.cancelBtn}>
                <Text style={styles.cancelBtnText}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.trackBtn}>
                <Text style={styles.trackBtnText}>Reschedule →</Text>
              </TouchableOpacity>
            </View>
          )}

          {/* Cancelled: rebook */}
          {isCancelled && (
            <TouchableOpacity style={styles.trackBtn}>
              <Text style={styles.trackBtnText}>Rebook →</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    </View>
  );
};

// ─── Main Screen ──────────────────────────────────────────────────────────────

const MyBookingsScreen = () => {
  const [activeTab, setActiveTab] = useState('All');
  const [activeFilter, setActiveFilter] = useState('All services');

  const filteredBookings = useMemo(() => {
    let result = [...BOOKINGS];

    // Tab filter
    if (activeTab === 'Upcoming') {
      result = result.filter(
        b => b.status === 'upcoming' || b.status === 'ongoing',
      );
    } else if (activeTab === 'Completed') {
      result = result.filter(
        b => b.status === 'completed' || b.status === 'credited',
      );
    } else if (activeTab === 'Cancelled') {
      result = result.filter(b => b.status === 'cancelled');
    }

    // Chip filter
    if (activeFilter !== 'All services') {
      result = result.filter(b => b.type === activeFilter);
    }

    return result;
  }, [activeTab, activeFilter]);

  const stats = useMemo(
    () => ({
      total: BOOKINGS.length,
      upcoming: BOOKINGS.filter(
        b => b.status === 'upcoming' || b.status === 'ongoing',
      ).length,
      completed: BOOKINGS.filter(
        b => b.status === 'completed' || b.status === 'credited',
      ).length,
      cancelled: BOOKINGS.filter(b => b.status === 'cancelled').length,
    }),
    [],
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="light-content" backgroundColor="#111" />

      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerRow}>
          <TouchableOpacity
            style={styles.backBtn}
            onPress={goBack}
            activeOpacity={0.8}
          >
            <Text style={styles.backBtnText}>‹</Text>
          </TouchableOpacity>
          <View>
            <Text style={styles.headerTitle}>My Bookings</Text>
            <Text style={styles.headerSub}>Track all your service history</Text>
          </View>
        </View>

        {/* Tabs */}
        <View style={styles.tabsContainer}>
          {TABS.map(tab => (
            <TouchableOpacity
              key={tab}
              style={[styles.tab, activeTab === tab && styles.tabActive]}
              onPress={() => setActiveTab(tab)}
              activeOpacity={0.8}
            >
              <Text
                style={[
                  styles.tabText,
                  activeTab === tab && styles.tabTextActive,
                ]}
              >
                {tab}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      <FlatList
        data={filteredBookings}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={() => (
          <>
            {/* Summary Strip */}
            <View style={styles.summaryStrip}>
              {[
                { num: stats.total, label: 'Total', color: COLORS.white },
                {
                  num: stats.upcoming,
                  label: 'Upcoming',
                  color: COLORS.white,
                },
                {
                  num: stats.completed,
                  label: 'Completed',
                  color: COLORS.white,
                },
                { num: stats.cancelled, label: 'Cancelled', color: COLORS.white },
              ].map((s, i, arr) => (
                <View
                  key={s.label}
                  style={[
                    styles.summaryItem,
                    i < arr.length - 1 && styles.summaryItemBorder,
                  ]}
                >
                  <Text style={[styles.summaryNum, { color: s.color }]}>
                    {s.num}
                  </Text>
                  <Text style={styles.summaryLabel}>{s.label}</Text>
                </View>
              ))}
            </View>

            {/* Filter chips */}
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.filterScroll}
            >
              {FILTER_CHIPS.map(chip => (
                <TouchableOpacity
                  key={chip}
                  style={[
                    styles.filterChip,
                    activeFilter === chip && styles.filterChipActive,
                  ]}
                  onPress={() => setActiveFilter(chip)}
                  activeOpacity={0.8}
                >
                  <Text
                    style={[
                      styles.filterChipText,
                      activeFilter === chip && styles.filterChipTextActive,
                    ]}
                  >
                    {chip}
                  </Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </>
        )}
        renderItem={({ item }) => <BookingCard item={item} />}
        ItemSeparatorComponent={() => <View style={{ height: 12 }} />}
        ListEmptyComponent={() => (
          <View style={styles.emptyState}>
            <View style={styles.emptyIcon}>
              <Text style={{ fontSize: 32 }}>📋</Text>
            </View>
            <Text style={styles.emptyTitle}>No bookings found</Text>
            <Text style={styles.emptySubtitle}>
              You have no {activeTab.toLowerCase()} bookings
              {activeFilter !== 'All services' ? ` for ${activeFilter}` : ''}.
            </Text>
            <TouchableOpacity
              style={styles.bookNowBtn}
              onPress={() => navigate('PackageScreen')}
              activeOpacity={0.85}
            >
              <Text style={styles.bookNowText}>Book a service →</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </SafeAreaView>
  );
};

export default MyBookingsScreen;
