import { router } from 'expo-router';
import React, { memo } from 'react';
import { Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { Card } from '@/components/ui/Card';
import { IconSymbol } from '@/components/ui/IconSymbol';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { OutletAPI } from '@/hooks/useOutlet';

interface OutletItemProps {
  outlet: OutletAPI;
}

const OutletItem: React.FC<OutletItemProps> = ({ outlet }) => {
  // Debug log untuk memastikan data outlet yang diterima
  console.log('OutletItem props:', outlet);

  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? 'light'];
  
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'maintain':
        return colors.success;
      case 'unproductive':
        return colors.danger;
      case 'unmaintain':
        return colors.warning;
      default:
        return colors.textSecondary;
    }
  };
  
  return (
    <TouchableOpacity
      onPress={() => router.push({ pathname: '/outlet/[kode]/view', params: { kode: outlet.id } })}
      style={{ 
        marginBottom: 12, 
        marginHorizontal: 2,
        opacity: 1,
        transform: [{ scale: 1 }],
      }}
      activeOpacity={0.92}
    >
      <Card 
        noPadding
        style={{
          backgroundColor: colors.card, 
          borderRadius: 16,
          overflow: 'hidden',
          borderWidth: 0,
          ...Platform.select({
            ios: {
              shadowColor: colors.text,
              shadowOffset: { width: 0, height: 4 },
              shadowOpacity: 0.1,
              shadowRadius: 8,
            },
            android: {
              elevation: 4,
            },
          }),
        }}
      >
        <View style={styles.outletCard}>
          <View style={styles.outletInfo}>
            {/* Header with Status Badge */}
            <View style={styles.outletHeader}>
              <Text 
                style={[styles.outletName, { 
                  color: colors.text, 
                  fontSize: 18, 
                  fontWeight: 'bold', 
                  flex: 1,
                  letterSpacing: -0.3,
                }]} 
                numberOfLines={2} 
                ellipsizeMode="tail"
              >
                {outlet.namaOutlet || '-'}
              </Text>
              <View 
                style={[styles.outletBadge, {
                  backgroundColor: getStatusColor(outlet.statusOutlet) + '15',
                  borderWidth: 1,
                  borderColor: getStatusColor(outlet.statusOutlet) + '40',
                  marginLeft: 8,
                  borderRadius: 8,
                }]}
              >
                <Text style={[styles.outletBadgeText, { 
                  color: getStatusColor(outlet.statusOutlet), 
                  fontWeight: '600',
                  letterSpacing: -0.2,
                }]}> 
                  {outlet.statusOutlet ? outlet.statusOutlet.charAt(0).toUpperCase() + outlet.statusOutlet.slice(1) : '-'}
                </Text>
              </View>
            </View>
            
            {/* Outlet Code and Phone Number */}
            <View style={[styles.outletMetaInfo, { marginBottom: 10 }]}>
              <View style={styles.outletCodeContainer}>
                <IconSymbol name="qrcode" size={14} color={colors.primary} style={{ marginRight: 4 }} />
                <Text style={[styles.outletType, { 
                  color: colors.primary, 
                  fontWeight: '600', 
                  marginRight: 12,
                  fontSize: 14,
                }]} numberOfLines={1} ellipsizeMode="tail">
                  {outlet.kodeOutlet || '-'}
                </Text>
              </View>
              
              {outlet.nomerTlpOutlet ? (
                <View style={styles.outletPhoneContainer}>
                  <IconSymbol name="phone.fill" size={12} color={colors.textSecondary} />
                  <Text style={{ 
                    color: colors.textSecondary, 
                    fontSize: 13, 
                    marginLeft: 4,
                    fontWeight: '500'
                  }}>
                    {outlet.nomerTlpOutlet}
                  </Text>
                </View>
              ) : null}
            </View>

            {/* Address with region/cluster info */}
            <View style={styles.outletDetailSection}>
              <View style={styles.outletAddressContainer}>
                <IconSymbol name="mappin.and.ellipse" size={14} color={colors.textSecondary} style={{ marginTop: 2 }} />
                <Text style={[styles.outletAddress, { 
                  color: colors.text, 
                  flex: 1, 
                  fontSize: 13,
                  fontWeight: '500',
                  lineHeight: 18,
                }]} numberOfLines={2} ellipsizeMode="tail">
                  {outlet.alamatOutlet || '-'}
                </Text>
              </View>

              {/* Location Info */}
              <View style={styles.locationInfoContainer}>
                {outlet.distric && (
                  <View style={styles.locationDetail}>
                    <IconSymbol name="location.circle.fill" size={14} color={colors.textSecondary} />
                    <Text style={[styles.locationText, { 
                      color: colors.textSecondary, 
                      fontSize: 13, 
                      fontWeight: '500'
                    }]}>
                      {outlet.distric}
                    </Text>
                  </View>
                )}

                {outlet.region && (
                  <View style={styles.locationDetail}>
                    <IconSymbol name="map.fill" size={12} color={colors.textSecondary} />
                    <Text style={[styles.locationText, { 
                      color: colors.textSecondary, 
                      fontSize: 13, 
                      fontWeight: '500'
                    }]}>
                      {outlet.region}
                    </Text>
                  </View>
                )}
              </View>
            </View>
          </View>
          <View style={styles.arrowIndicator}>
            <IconSymbol name="chevron.right" size={22} color={colors.textSecondary} />
          </View>
        </View>
      </Card>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  outletCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  outletInfo: {
    flex: 1,
    padding: 16,
  },
  outletHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  outletName: {
    fontSize: 16,
    fontWeight: '600',
  },
  outletBadge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
  },
  outletBadgeText: {
    fontSize: 12,
    fontWeight: '500',
  },
  outletMetaInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  outletCodeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 12,
  },
  outletPhoneContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  outletType: {
    fontSize: 14,
  },
  outletDetailSection: {
    marginTop: 4,
  },
  outletAddressContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 8,
  },
  outletAddress: {
    fontSize: 14,
    marginLeft: 4,
  },
  locationInfoContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 4,
  },
  locationDetail: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 12,
    marginBottom: 4,
  },
  locationText: {
    fontSize: 13,
    marginLeft: 4,
  },
  arrowIndicator: {
    paddingHorizontal: 12,
  },
});

export default memo(OutletItem);
