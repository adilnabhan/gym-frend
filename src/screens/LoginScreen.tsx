import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Colors, Typography, Spacing, Radius } from '../theme';

const LoginScreen = () => {
  const [phone, setPhone] = React.useState('');

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.brand}>DISCIPL</Text>
        <Text style={styles.tagline}>Train with Discipline</Text>
      </View>

      <View style={styles.form}>
        <Text style={styles.label}>MOBILE NUMBER</Text>
        <View style={styles.inputRow}>
          <View style={styles.countryCode}>
            <Text style={styles.countryText}>+91</Text>
          </View>
          <TextInput
            style={styles.input}
            placeholder="Enter your mobile number"
            placeholderTextColor={Colors.outline}
            keyboardType="phone-pad"
            value={phone}
            onChangeText={setPhone}
            maxLength={10}
          />
        </View>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>SEND OTP</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.skipLink}>
        <Text style={styles.skipText}>Skip for now</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    paddingHorizontal: Spacing.md,
    justifyContent: 'center',
  },
  header: {
    alignItems: 'center',
    marginBottom: Spacing.xl,
  },
  brand: {
    ...Typography.display,
    color: Colors.primaryContainer,
    fontSize: 40,
    letterSpacing: 4,
  },
  tagline: {
    ...Typography.bodyMd,
    color: Colors.onSurfaceVariant,
    marginTop: Spacing.xs,
  },
  form: {
    backgroundColor: Colors.white,
    borderRadius: Radius.lg,
    padding: Spacing.md,
    shadowColor: Colors.obsidian,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.04,
    shadowRadius: 12,
    elevation: 2,
  },
  label: {
    ...Typography.labelMd,
    color: Colors.onSurface,
    marginBottom: Spacing.xs,
    textTransform: 'uppercase',
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: Spacing.md,
  },
  countryCode: {
    backgroundColor: Colors.surfaceContainerLow,
    paddingHorizontal: Spacing.sm,
    paddingVertical: 14,
    borderRadius: Radius.default,
    marginRight: Spacing.xs,
    borderWidth: 1,
    borderColor: Colors.divider,
  },
  countryText: {
    ...Typography.bodyMd,
    color: Colors.onSurface,
    fontWeight: '600',
  },
  input: {
    flex: 1,
    ...Typography.bodyMd,
    color: Colors.onSurface,
    backgroundColor: Colors.white,
    borderWidth: 1,
    borderColor: Colors.divider,
    borderRadius: Radius.default,
    paddingHorizontal: Spacing.sm,
    paddingVertical: 14,
  },
  button: {
    backgroundColor: Colors.primaryContainer,
    borderRadius: Radius.default,
    paddingVertical: 16,
    alignItems: 'center',
  },
  buttonText: {
    ...Typography.labelMd,
    color: Colors.onPrimary,
    textTransform: 'uppercase',
  },
  skipLink: {
    alignItems: 'center',
    marginTop: Spacing.lg,
  },
  skipText: {
    ...Typography.bodyMd,
    color: Colors.outline,
  },
});

export default LoginScreen;
