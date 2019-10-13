<template>
  <div id="home_page">
    <NavigationBar />
    <MainNavigation />
    <LouPlus />
    <Boutique />
    <RecentlyRecommendCourse />
    <BaseCourse />
    <BackendCourse />
    <CloudComputedBigDataCourse />
    <TraningCourse />
    <LearningPath />
    <SiteDescription />
  </div>
</template>

<script>
import NavigationBar from '@/components/home_page/navigation_bar'
import MainNavigation from '@/components/home_page/main_navigation'
import LouPlus from '@/components/home_page/lou_plus'
import Boutique from '@/components/home_page/boutique_course'
import RecentlyRecommendCourse from '@/components/home_page/recently_recommend_course'
import BaseCourse from '@/components/home_page/base_course'
import BackendCourse from '@/components/home_page/backend_course'
import CloudComputedBigDataCourse from '@/components/home_page/cloudComputed_bigData_course'
import TraningCourse from '@/components/home_page/traning_course'
import LearningPath from '@/components/home_page/learning_path'
import SiteDescription from '@/components/home_page/site_description'
export default {
  components:{
    NavigationBar,
    MainNavigation,
    LouPlus,
    Boutique,
    RecentlyRecommendCourse,
    BaseCourse,
    BackendCourse,
    CloudComputedBigDataCourse,
    TraningCourse,
    LearningPath,
    SiteDescription
  }
}
</script>

<style>

</style>