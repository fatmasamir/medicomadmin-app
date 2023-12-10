<script setup>
import Navbar from "@/components/global/NavBar/NavBar.vue";
import Header from "@/components/pages/Hompage/Header/index.vue";
import ClinicSpecialities from "@/components/pages/Hompage/ClinicSpecialities/index.vue";
import Specialities from "@/components/pages/Hompage/Specialities/index.vue";
import OurDoctors from "@/components/pages/Hompage/OurDoctors/index.vue";
import AvailabeFeatures from "@/components/pages/Hompage/AvailabeFeatures/index.vue";
import BlogsNews from "@/components/pages/Hompage/BlogsNews/index.vue";
import Footer from "@/components/global/Footer/index.vue";
</script>
<template>
  <div class="Home">
    <Navbar />
    <Header />
    <ClinicSpecialities />
    <Specialities />
    <OurDoctors />
    <AvailabeFeatures />
    <BlogsNews />
    <Footer />
  </div>
</template>
