import React from 'react';
import {View} from 'react-native';
import Text from '@components/Text';
import useThemeStyles from '@hooks/useThemeStyles';
import useLocalize from '@hooks/useLocalize';

/**
 * Subtle indicator shown when a deep-linked report action is not found.
 * This provides minimal feedback to the user without disrupting the experience.
 */
function ReportActionNotFoundIndicator() {
    const styles = useThemeStyles();
    const {translate} = useLocalize();

    return (
        <View style={[styles.ph5, styles.pv2, styles.bgMuted]}>
            <Text style={[styles.textMicroSupporting, styles.textAlignCenter]}>
                {translate('reportActionNotFound.message')}
            </Text>
        </View>
    );
}

ReportActionNotFoundIndicator.displayName = 'ReportActionNotFoundIndicator';

export default ReportActionNotFoundIndicator;
