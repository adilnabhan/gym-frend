import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { Colors, Typography, Spacing, Radius } from '../theme';

const HomeScreen = () => {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      {/* Header */}
      <View style={styles.header}>
        <View>
          <Text style={styles.greeting}>Good Morning,</Text>
          <Text style={styles.userName}>User</Text>
        </View>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>U</Text>
        </View>
      </View>

      {/* Stats Row */}
      <View style={styles.statsRow}>
        <View style={styles.statCard}>
          <Text style={styles.statValue}>3</Text>
          <Text style={styles.statLabel}>WORKOUTS THIS WEEK</Text>
        </View>
        <View style={styles.statCard}>
          <Text style={[styles.statValue, { color: Colors.primaryContainer }]}>12</Text>
          <Text style={styles.statLabel}>DAY STREAK</Text>
        </View>
      </View>

      {/* Upcoming Workout */}
      <Text style={styles.sectionTitle}>Upcoming Workout</Text>
      <View style={styles.card}>
        <View style={styles.cardHeader}>
          <Text style={styles.cardTitle}>Upper Body Push</Text>
          <View style={styles.badge}>
            <Text style={styles.badgeText}>TODAY</Text>
          </View>
        </View>
        <Text style={styles.cardSubtitle}>10:00 AM • Coach Ahmad</Text>
        <View style={styles.exercisePreview}>
          <Text style={styles.exerciseText}>Bench Press • Shoulder Press • Tricep Dips</Text>
        </View>
        <TouchableOpacity style={styles.cardButton}>
          <Text style={styles.cardButtonText}>START WORKOUT</Text>
        </TouchableOpacity>
      </View>

      {/* Membership */}
      <Text style={styles.sectionTitle}>My Membership</Text>
      <View style={styles.card}>
        <View style={styles.cardHeader}>
          <Text style={styles.cardTitle}>Premium Plan</Text>
          <View style={[styles.badge, { backgroundColor: Colors.tertiaryContainer }]}>
            <Text style={[styles.badgeText, { color: Colors.onTertiaryContainer }]}>ACTIVE</Text>
          </View>
        </View>
        <Text style={styles.cardSubtitle}>Valid until Dec 2026</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  content: {
    padding: Spacing.md,
    paddingBottom: 100,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: Spacing.md,
    marginTop: Spacing.sm,
  },
  greeting: {
    ...Typography.bodyMd,
    color: Colors.onSurfaceVariant,
  },
  userName: {
    ...Typography.headlineMd,
    color: Colors.onSurface,
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: Colors.primaryContainer,
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarText: {
    ...Typography.labelMd,
    color: Colors.onPrimary,
    fontSize: 18,
  },
  statsRow: {
    flexDirection: 'row',
    gap: Spacing.sm,
    marginBottom: Spacing.md,
  },
  statCard: {
    flex: 1,
    backgroundColor: Colors.white,
    borderRadius: Radius.lg,
    padding: Spacing.sm,
    alignItems: 'center',
    shadowColor: Colors.obsidian,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.04,
    shadowRadius: 12,
    elevation: 2,
  },
  statValue: {
    ...Typography.headlineLgMobile,
    color: Colors.onSurface,
  },
  statLabel: {
    ...Typography.labelSm,
    color: Colors.onSurfaceVariant,
    marginTop: Spacing.base,
    textTransform: 'uppercase',
  },
  sectionTitle: {
    ...Typography.labelMd,
    color: Colors.onSurfaceVariant,
    textTransform: 'uppercase',
    marginBottom: Spacing.xs,
  },
  card: {
    backgroundColor: Colors.white,
    borderRadius: Radius.lg,
    padding: Spacing.sm,
    marginBottom: Spacing.md,
    shadowColor: Colors.obsidian,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.04,
    shadowRadius: 12,
    elevation: 2,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: Spacing.base,
  },
  cardTitle: {
    ...Typography.headlineMd,
    color: Colors.onSurface,
    fontSize: 20,
  },
  badge: {
    backgroundColor: Colors.primaryContainer,
    borderRadius: Radius.full,
    paddingHorizontal: Spacing.xs,
    paddingVertical: 4,
  },
  badgeText: {
    ...Typography.labelSm,
    color: Colors.onPrimary,
    textTransform: 'uppercase',
  },
  cardSubtitle: {
    ...Typography.bodyMd,
    color: Colors.onSurfaceVariant,
    marginBottom: Spacing.xs,
  },
  exercisePreview: {
    backgroundColor: Colors.surfaceContainerLow,
    borderRadius: Radius.default,
    padding: Spacing.xs,
    marginBottom: Spacing.sm,
  },
  exerciseText: {
    ...Typography.labelSm,
    color: Colors.onSurfaceVariant,
  },
  cardButton: {
    backgroundColor: Colors.primaryContainer,
    borderRadius: Radius.default,
    paddingVertical: 12,
    alignItems: 'center',
  },
  cardButtonText: {
    ...Typography.labelMd,
    color: Colors.onPrimary,
    textTransform: 'uppercase',
  },
});

export default HomeScreen;
