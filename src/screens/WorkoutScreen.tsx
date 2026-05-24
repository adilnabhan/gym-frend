import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { Colors, Typography, Spacing, Radius } from '../theme';

const exercises = [
  { name: 'Bench Press', sets: 4, reps: 12, done: false },
  { name: 'Squats', sets: 3, reps: 15, done: false },
  { name: 'Deadlift', sets: 3, reps: 10, done: false },
  { name: 'Shoulder Press', sets: 3, reps: 12, done: false },
  { name: 'Lat Pulldown', sets: 3, reps: 12, done: false },
];

const WorkoutScreen = () => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity>
          <Text style={styles.backArrow}>←</Text>
        </TouchableOpacity>
        <Text style={styles.title}>Today's Workout</Text>
        <View style={{ width: 32 }} />
      </View>

      {/* Timer */}
      <View style={styles.timerContainer}>
        <Text style={styles.timerText}>00:00</Text>
        <Text style={styles.timerLabel}>ELAPSED TIME</Text>
      </View>

      {/* Exercises */}
      <ScrollView style={styles.exerciseList}>
        {exercises.map((ex, i) => (
          <View key={i} style={styles.exerciseRow}>
            <TouchableOpacity style={styles.checkbox}>
              {ex.done && <View style={styles.checkboxFill} />}
            </TouchableOpacity>
            <View style={styles.exerciseInfo}>
              <Text style={styles.exerciseName}>{ex.name}</Text>
              <Text style={styles.exerciseMeta}>
                {ex.sets} × {ex.reps} reps
              </Text>
            </View>
          </View>
        ))}
      </ScrollView>

      {/* Start Button */}
      <View style={styles.footer}>
        <TouchableOpacity style={styles.startButton}>
          <Text style={styles.startButtonText}>START WORKOUT</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: Spacing.md,
    paddingTop: Spacing.xl,
    paddingBottom: Spacing.sm,
  },
  backArrow: {
    fontSize: 24,
    color: Colors.onSurface,
  },
  title: {
    ...Typography.headlineMd,
    color: Colors.onSurface,
    fontSize: 20,
  },
  timerContainer: {
    alignItems: 'center',
    paddingVertical: Spacing.lg,
    backgroundColor: Colors.white,
    marginHorizontal: Spacing.md,
    borderRadius: Radius.lg,
    shadowColor: Colors.obsidian,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.04,
    shadowRadius: 12,
    elevation: 2,
  },
  timerText: {
    fontFamily: 'HankenGrotesk-ExtraBold',
    fontSize: 64,
    fontWeight: '800',
    color: Colors.onSurface,
    letterSpacing: -2,
  },
  timerLabel: {
    ...Typography.labelSm,
    color: Colors.onSurfaceVariant,
    marginTop: Spacing.base,
    textTransform: 'uppercase',
  },
  exerciseList: {
    flex: 1,
    paddingHorizontal: Spacing.md,
    marginTop: Spacing.md,
  },
  exerciseRow: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.white,
    borderRadius: Radius.default,
    padding: Spacing.sm,
    marginBottom: Spacing.xs,
    borderBottomWidth: 1,
    borderBottomColor: Colors.divider,
  },
  checkbox: {
    width: 24,
    height: 24,
    borderRadius: Radius.default,
    borderWidth: 2,
    borderColor: Colors.primaryContainer,
    marginRight: Spacing.sm,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkboxFill: {
    width: 14,
    height: 14,
    borderRadius: 2,
    backgroundColor: Colors.primaryContainer,
  },
  exerciseInfo: {
    flex: 1,
  },
  exerciseName: {
    ...Typography.bodyMd,
    color: Colors.onSurface,
    fontWeight: '600',
  },
  exerciseMeta: {
    ...Typography.labelSm,
    color: Colors.onSurfaceVariant,
    marginTop: 2,
  },
  footer: {
    padding: Spacing.md,
    backgroundColor: Colors.background,
  },
  startButton: {
    backgroundColor: Colors.primaryContainer,
    borderRadius: Radius.default,
    paddingVertical: 16,
    alignItems: 'center',
  },
  startButtonText: {
    ...Typography.labelMd,
    color: Colors.onPrimary,
    textTransform: 'uppercase',
  },
});

export default WorkoutScreen;
