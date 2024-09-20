import { Stack, useRouter, useSearchParams } from "expo-router";
import { useCallback, useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  ActivityIndicator,
  RefreshControl,
} from "react-native";

import {
    Company,
    JobAbout,
    JobFooter,
    JobTabs,
    ScreenHeaderBtn,
    Specifics,
  } from "../../components";
  import { COLORS, icons, SIZES } from "../../constants";
  import useFetch from "../../hook/useFetch";
  import styles from "./jobstyles";
  const tabs = ["About", "Qualifications", "Responsibilities"];



const JobDetails = () => {
  return (
    <View style={styles.container}>
        <Text>JobDetailss</Text>
    </View>
  )
}

export default JobDetails
