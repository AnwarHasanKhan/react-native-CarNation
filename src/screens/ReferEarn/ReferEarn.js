import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Share,
  Clipboard,
  StatusBar,
  FlatList,
  Platform,
  Image,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header2 from '../../components/Header2/Header2';
import { styles } from './styles';
import CustomButton from '../../components/CustomButton';
import { goBack } from '../../navigation/NavigationService';
import LinearGradient from 'react-native-linear-gradient';

// ─── Constants ────────────────────────────────────────────────────────────────

const COLORS = {
  bg: '#0a0a0a',
  card: '#111111',
  border: '#2a2a2a',
  borderDim: '#1e1e1e',
  yellow: '#FFD600',
  yellowBg: '#1a1a00',
  yellowBorder: '#3a3000',
  green: '#4CAF50',
  greenBg: '#1a2a1a',
  red: '#EF5350',
  redBg: '#2a1a1a',
  purple: '#7986CB',
  purpleBg: '#1a1a2e',
  white: '#FFFFFF',
  textPrimary: '#FFFFFF',
  textSecondary: '#888888',
  textMuted: '#555555',
  textDim: '#444444',
};

const REFERRAL_CODE = 'HOORA-MK14';

const REWARDS = [
  {
    emoji: '⛽',
    amount: '₹50',
    label: 'Free petrol per successful referral',
    bg: '#1a1a00',
  },
  {
    emoji: '🎁',
    amount: '₹30',
    label: "Discount for your friend's first booking",
    bg: '#1a2a1a',
  },
  {
    emoji: '⭐',
    amount: '500 pts',
    label: 'Hoora points added instantly',
    bg: '#1a1a2e',
  },
  {
    emoji: '🏆',
    amount: 'No limit',
    label: 'Refer as many friends as you like',
    bg: '#2a1a1a',
  },
];

const STEPS = [
  {
    num: '1',
    title: 'Share your code',
    desc: 'Send your unique referral code to friends via WhatsApp, SMS, or any platform',
  },
  {
    num: '2',
    title: 'Friend signs up',
    desc: 'Your friend downloads the app and enters your code during registration',
  },
  {
    num: '3',
    title: 'Both of you earn',
    desc: 'You get ₹50 petrol credit, your friend gets ₹30 off their first booking',
  },
];

const FRIENDS = [
  {
    initials: 'PP',
    name: 'Pranshu Pandey',
    date: 'Joined 2 days ago',
    reward: '+₹50',
    status: 'earned',
    avatarBg: '#1a1a2e',
    avatarColor: '#7986CB',
  },
  {
    initials: 'PS',
    name: 'Priya S.',
    date: 'Joined 5 days ago',
    reward: '+₹50',
    status: 'earned',
    avatarBg: '#1a2a1a',
    avatarColor: '#4CAF50',
  },
  {
    initials: 'AM',
    name: 'Arjun M.',
    date: 'Pending first booking',
    reward: 'Pending',
    status: 'pending',
    avatarBg: '#2a1a1a',
    avatarColor: '#EF5350',
  },
];

// ─── Sub-components ───────────────────────────────────────────────────────────

const SectionLabel = ({ label, style }) => (
  <Text style={[styles.sectionLabel, style]}>{label}</Text>
);

const HeroSection = () => (
  <View style={styles.hero}>
    <View style={styles.coinRing}>
      <Image
        source={require('../../assets/icons/coin.png')}
        style={{ height: 60, width: 60 }}
      />
    </View>
    <Text style={styles.heroTitle}>Invite friends, earn ₹50</Text>
    <Text style={styles.heroSub}>
      Share your code and get ₹50 free petrol for every friend who books their
      first service
    </Text>
  </View>
);

const ReferralCodeBox = ({ copied, onCopy }) => (
  <View style={styles.codeBox}>
    <View>
      <Text style={styles.codeLabel}>YOUR REFERRAL CODE</Text>
      <Text style={styles.codeVal}>{REFERRAL_CODE}</Text>
    </View>
    <TouchableOpacity
      style={[styles.copyBtn, copied && styles.copyBtnActive]}
      onPress={onCopy}
      activeOpacity={0.8}
    >
      <Text style={styles.copyBtnText}>{copied ? '✓ Copied' : 'Copy'}</Text>
    </TouchableOpacity>
  </View>
);

const ShareButton = ({ onShare }) => (
  <CustomButton
    title={'Share with friends'}
    size={16}
    thick={'600'}
    onPress={onShare}
  />
);

const StepItem = ({ step, isLast }) => (
  <View style={styles.stepRow}>
    <View style={styles.stepLineWrap}>
      <View style={styles.stepNum}>
        <Text style={styles.stepNumText}>{step.num}</Text>
      </View>
      {!isLast && <View style={styles.stepConnector} />}
    </View>
    <View style={[styles.stepContent, !isLast && { paddingBottom: 20 }]}>
      <Text style={styles.stepTitle}>{step.title}</Text>
      <Text style={styles.stepDesc}>{step.desc}</Text>
    </View>
  </View>
);

const RewardCard = ({ item }) => (
  <View style={styles.rewardCard}>
    <View style={[styles.rewardIcon, { backgroundColor: item.bg }]}>
      <Text style={{ fontSize: 18 }}>{item.emoji}</Text>
    </View>
    <Text style={styles.rewardAmt}>{item.amount}</Text>
    <Text style={styles.rewardLabel}>{item.label}</Text>
  </View>
);

const StatCard = ({ num, label, numColor }) => (
  <View style={styles.statCard}>
    <Text style={[styles.statNum, numColor && { color: numColor }]}>{num}</Text>
    <Text style={styles.statLabel}>{label}</Text>
  </View>
);

const FriendItem = ({ item, isLast }) => (
  <View style={[styles.friendItem, isLast && { borderBottomWidth: 0 }]}>
    <View style={styles.friendLeft}>
      <View style={[styles.friendAvatar, { backgroundColor: item.avatarBg }]}>
        <Text style={[styles.friendAvatarText, { color: item.avatarColor }]}>
          {item.initials}
        </Text>
      </View>
      <View>
        <Text style={styles.friendName}>{item.name}</Text>
        <Text style={styles.friendDate}>{item.date}</Text>
      </View>
    </View>
    <Text
      style={[
        styles.friendReward,
        item.status === 'pending' && { color: COLORS.textMuted, fontSize: 12 },
      ]}
    >
      {item.reward}
    </Text>
  </View>
);

// ─── Main Screen ──────────────────────────────────────────────────────────────

const ReferEarn = ({ navigation }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    Clipboard.setString(REFERRAL_CODE);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleShare = async () => {
    try {
      await Share.share({
        message: `Hey! Use my referral code ${REFERRAL_CODE} on the Hoora app and get ₹30 off your first car service booking. Download now and save big! 🚗✨`,
        title: 'Refer a friend to Hoora',
      });
    } catch (error) {
      console.log('Share error:', error);
    }
  };

  return (
    <>
      <StatusBar
        barStyle="light-content"
        backgroundColor="#000"
        translucent={false}
      />
      <LinearGradient
        useAngle={true}
        angle={15}
        angleCenter={{ x: 0.1, y: 0.2 }}
        colors={['#0A0A0A', '#121212', '#192f6a']}
        style={{
          flex: 1,
        }}
      >
        <SafeAreaView style={styles.safeArea}>
          <ScrollView
            style={styles.scroll}
            contentContainerStyle={styles.scrollContent}
            showsVerticalScrollIndicator={false}
          >
            {/* ── Hero ── */}
            <HeroSection />

            {/* ── Referral Code ── */}
            <ReferralCodeBox copied={copied} onCopy={handleCopy} />

            {/* ── Share Button ── */}
            <ShareButton onShare={handleShare} />

            {/* ── How it works ── */}
            <SectionLabel label="HOW IT WORKS" style={{ marginBottom: 12 }} />
            <View style={styles.stepsContainer}>
              {STEPS.map((step, index) => (
                <StepItem
                  key={step.num}
                  step={step}
                  isLast={index === STEPS.length - 1}
                />
              ))}
            </View>

            {/* ── Rewards ── */}
            <SectionLabel label="YOUR REWARDS" style={{ marginBottom: 12 }} />
            <View style={styles.rewardsGrid}>
              {REWARDS.map((item, index) => (
                <RewardCard key={index} item={item} />
              ))}
            </View>

            {/* ── Stats ── */}
            <SectionLabel label="YOUR STATS" style={{ marginBottom: 12 }} />
            <View style={styles.statsRow}>
              <StatCard num="3" label="Friends referred" />
              <StatCard
                num="₹150"
                label="Total earned"
                numColor={COLORS.yellow}
              />
              <StatCard
                num="₹50"
                label="Pending credit"
                numColor={COLORS.green}
              />
            </View>

            {/* ── Referred Friends ── */}
            <SectionLabel
              label="REFERRED FRIENDS"
              style={{ marginBottom: 0 }}
            />
            <View style={styles.friendsCard}>
              {FRIENDS.map((item, index) => (
                <FriendItem
                  key={index}
                  item={item}
                  isLast={index === FRIENDS.length - 1}
                />
              ))}
            </View>

            {/* ── T&C ── */}
            <Text style={styles.tnc}>
              Credits are applied after your friend completes their first
              booking. <Text style={{ color: COLORS.yellow }}>T&C apply.</Text>
            </Text>
          </ScrollView>
        </SafeAreaView>
      </LinearGradient>
    </>
  );
};

export default ReferEarn;
