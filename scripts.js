// SIDEBAR TOGGLE

let sidebarOpen = false;
const sidebar = document.getElementById('sidebar');

function openSidebar() {
  if (!sidebarOpen) {
    sidebar.classList.add('sidebar-responsive');
    sidebarOpen = true;
  }
}

function closeSidebar() {
  if (sidebarOpen) {
    sidebar.classList.remove('sidebar-responsive');
    sidebarOpen = false;
  }
}

// ---------- CHARTS ----------

// BAR CHART
const barChartOptions = {
  series: [
    {
      data: [10, 26, 16, 24, 22, 27, 70, 30, 61, 50, 29, 17, 76, 42, 71, 39, 46, 26, 13, 15, 20, 49, 36, 69,52, 69,79, 77, 83, 20, 10, 47, 12, 11, 11, 11, 140, 12],
    },
  ],
  chart: {
    type: 'bar',
    height: 500,
    toolbar: {
      show: false,
    },
  },
  colors: ['#246dec', '#cc3c43', '#367952', '#f5b74f', '#4f35a1'],
  plotOptions: {
    bar: {
      distributed: true,
      borderRadius: 4,
      horizontal: false,
      columnWidth: '60%',
    },
  },
  dataLabels: {
    enabled: false,
  },
  legend: {
    show: false,
  },
  xaxis: {
    categories: ['Pacitan', 'Ponorogo', 'Trenggalek', 'Tulung Agung', 'Blitar', 'Kediri', 'Malang', 'Lumajang', 'Jember', 'Banyuwangi', 'Bondowoso', 'Situbondo', 'Probolinggo', 'Pasuruan', 'Sidoarjo', 'Mojokerto', 'Jombang', 'Nganjuk', 'Madiun', 'Magetan', 'Ngawi', 'Bojonegoro', 'Tuban', 'Lamongan', 'Gresik', 'Bangkalan', 'Sampang', 'Pamekasan', 'Sumenep', 'Kediri', 'Blitar', 'Malang', 'Probolinggo', 'Pasuruan', 'Mojokerto', 'Madiun', 'Surabaya', 'Batu'],
  },
  yaxis: {
    title: {
      text: 'Kabupaten Dan Kota',
    },
  },
};

const barChart = new ApexCharts(
  document.querySelector('#bar-chart'),
  barChartOptions
);
barChart.render();

// Data Daerah
const daerahLabels1 = ['Pacitan', 'Ponorogo', 'Trenggalek', 'Tulung Agung', 'Blitar', 'Kediri', 'Malang', 'Lumajang', 'Jember', 'Banyuwangi', 'Bondowoso', 'Situbondo', 'Probolinggo', 'Pasuruan', 'Sidoarjo', 'Mojokerto', 'Jombang', 'Nganjuk', 'Madiun', 'Magetan', 'Ngawi', 'Bojonegoro', 'Tuban', 'Lamongan', 'Gresik', 'Bangkalan', 'Sampang', 'Pamekasan', 'Sumenep', 'Kediri', 'Blitar', 'Malang', 'Probolinggo', 'Pasuruan', 'Mojokerto', 'Madiun', 'Surabaya', 'Batu'];

// BAR CHART - Jumlah Guru1
const barChartGuru1Options = {
  series: [{
    name: 'Jumlah Guru',
    data: [290, 770, 509, 806, 526, 889, 1614, 671, 1411, 1294, 560, 558, 1033, 865, 1817, 815, 1178, 923, 427, 522, 563, 1080, 815, 1530, 1312, 1028, 999, 1113, 1198, 687, 288, 1262, 239, 265, 261, 357, 3535, 301],
  }],
  chart: {
    type: 'bar',
    height: 600,
    toolbar: {
      show: false,
    },
  },
  colors: ['#246dec', '#cc3c43', '#367952', '#f5b74f', '#4f35a1', '#f59342'],
  plotOptions: {
    bar: {
      distributed: true,
      borderRadius: 4,
      horizontal: false,
      columnWidth: '60%',
    },
  },
  dataLabels: {
    enabled: true,
  },
  xaxis: {
    categories: daerahLabels1,
  },
};

const barChartGuru1 = new ApexCharts(document.querySelector('#bar-chart-guru1'), barChartGuru1Options);
barChartGuru1.render();

// BAR CHART - Jumlah Siswa
const barChartSiswa1Options = {
  series: [{
    name: 'Jumlah Siswa',
    data: [3673, 10475, 7867, 13854, 8926, 16667, 27323, 11507, 25396, 20324, 7139, 10540, 14810, 13775, 32681, 14144, 18525, 15255, 7552, 8510, 8134, 17198, 12059, 19373, 20208, 16872, 11906, 12985, 14587, 11872, 4875, 19501, 4395, 4251, 4204, 5713, 55883, 4756],
  }],
  chart: {
    type: 'bar',
    height: 600,
    toolbar: {
      show: false,
    },
  },
  colors: ['#246dec', '#cc3c43', '#4B0082', '#f5b74f', '#4f35a1', '#f59342'],
  plotOptions: {
    bar: {
      distributed: true,
      borderRadius: 4,
      horizontal: false,
      columnWidth: '60%',
    },
  },
  dataLabels: {
    enabled: true,
  },
  xaxis: {
    categories: daerahLabels1,
  },
};

const barChartSiswa1 = new ApexCharts(document.querySelector('#bar-chart-siswa1'), barChartSiswa1Options);
barChartSiswa1.render();

// BAR CHART - Jumlah Sekolah1
const barChartSekolah1Options = {
  series: [{
    name: 'Jumlah Sekolah',
    data: [10, 26, 16, 24, 22, 27, 70, 30, 61, 50, 29, 17, 76, 42, 71, 39, 46, 26, 13, 15, 20, 49, 36, 69,52, 69,79, 77, 83, 20, 10, 47, 12, 11, 11, 11, 140, 12],
  }],
  chart: {
    type: 'bar',
    height: 600,
    toolbar: {
      show: false,
    },
  },
  colors: ['#246dec', '#cc3c43', '#367952', '#f5b74f', '#4f35a1', '#f59342'],
  plotOptions: {
    bar: {
      distributed: true,
      borderRadius: 4,
      horizontal: false,
      columnWidth: '60%',
    },
  },
  dataLabels: {
    enabled: true,
  },
  xaxis: {
    categories: daerahLabels1,
  },
};

const barChartSekolah1 = new ApexCharts(document.querySelector('#bar-chart-sekolah1'), barChartSekolah1Options);
barChartSekolah1.render();

// AREA CHART
const areaChartOptions = {
  series: [
    {
      name: 'Jumlah Siswa',
      data: [3673, 10475, 7867, 13854, 8926, 16667, 27323, 11507, 25396, 20324, 7139, 10540, 14810, 13775, 32681, 14144, 18525, 15255, 7552, 8510, 8134, 17198, 12059, 19373, 20208, 16872, 11906, 12985, 14587, 11872, 4875, 19501, 4395, 4251, 4204, 5713, 55883, 4756],
    },
    {
      name: 'Jumlah Sekolah',
        data: [10, 26, 16, 24, 22, 27, 70, 30, 61, 50, 29, 17, 76, 42, 71, 39, 46, 26, 13, 15, 20, 49, 36, 69,52, 69,79, 77, 83, 20, 10, 47, 12, 11, 11, 11, 140, 12],
    },
    {
      name: 'Jumlah Guru',
      data: [290, 770, 509, 806, 526, 889, 1614, 671, 1411, 1294, 560, 558, 1033, 865, 1817, 815, 1178, 923, 427, 522, 563, 1080, 815, 1530, 1312, 1028, 999, 1113, 1198, 687, 288, 1262, 239, 265, 261, 357, 3535, 301],
    },
  ],
  chart: {
    height: 350,
    type: 'area',
    toolbar: {
      show: false,
    },
  },
  colors: ['#f5b74f','#367952','#246dec'],
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: 'smooth',
  },
  labels: ['Pacitan', 'Ponorogo', 'Trenggalek', 'Tulung Agung', 'Blitar', 'Kediri', 'Malang', 'Lumajang', 'Jember', 'Banyuwangi', 'Bondowoso', 'Situbondo', 'Probolinggo', 'Pasuruan', 'Sidoarjo', 'Mojokerto', 'Jombang', 'Nganjuk', 'Madiun', 'Magetan', 'Ngawi', 'Bojonegoro', 'Tuban', 'Lamongan', 'Gresik', 'Bangkalan', 'Sampang', 'Pamekasan', 'Sumenep', 'Kediri', 'Blitar', 'Malang', 'Probolinggo', 'Pasuruan', 'Mojokerto', 'Madiun', 'Surabaya', 'Batu'],
  markers: {
    size: 2,
  },
  yaxis: [
    {
      title: {
        text: 'Jumlah Siswa',
      },
    },
    {
      opposite: true,
      title: {
        text: 'Jumlah Guru',
      },
    },
  ],
  tooltip: {
    shared: true,
    intersect: false,
  },
};

const areaChart = new ApexCharts(
  document.querySelector('#area-chart'),
  areaChartOptions
);
areaChart.render();

// Data Daerah
const daerahLabels = ['Pacitan', 'Ponorogo', 'Trenggalek', 'Tulung Agung', 'Blitar', 'Kediri', 'Malang', 'Lumajang', 'Jember', 'Banyuwangi', 'Bondowoso', 'Situbondo', 'Probolinggo', 'Pasuruan', 'Sidoarjo', 'Mojokerto', 'Jombang', 'Nganjuk', 'Madiun', 'Magetan', 'Ngawi', 'Bojonegoro', 'Tuban', 'Lamongan', 'Gresik', 'Bangkalan', 'Sampang', 'Pamekasan', 'Sumenep', 'Kediri', 'Blitar', 'Malang', 'Probolinggo', 'Pasuruan', 'Mojokerto', 'Madiun', 'Surabaya', 'Batu'];

// PIE CHART - Jumlah Guru
const pieChartGuruOptions = {
  series: [290, 770, 509, 806, 526, 889, 1614, 671, 1411, 1294, 560, 558, 1033, 865, 1817, 815, 1178, 923, 427, 522, 563, 1080, 815, 1530, 1312, 1028, 999, 1113, 1198, 687, 288, 1262, 239, 265, 261, 357, 3535, 301],
  chart: {
    width: 300,
    type: 'pie',
  },
  labels: daerahLabels,
  colors: ['#246dec', '#cc3c43', '#367952', '#f5b74f', '#4f35a1', '#f59342'],
  title: {
    text: 'Jumlah Guru'
  }
};

const pieChartGuru = new ApexCharts(
  document.querySelector('#pie-chart-guru'),
  pieChartGuruOptions
);
pieChartGuru.render();

// PIE CHART - Jumlah Siswa
const pieChartSiswaOptions = {
  series: [3673, 10475, 7867, 13854, 8926, 16667, 27323, 11507, 25396, 20324, 7139, 10540, 14810, 13775, 32681, 14144, 18525, 15255, 7552, 8510, 8134, 17198, 12059, 19373, 20208, 16872, 11906, 12985, 14587, 11872, 4875, 19501, 4395, 4251, 4204, 5713, 55883, 4756],
  chart: {
    width: 300,
    type: 'pie',
  },
  labels: daerahLabels,
  colors: ['#246dec', '#cc3c43', '#367952', '#f5b74f', '#4f35a1', '#f59342'],
  title: {
    text: 'Jumlah Siswa'
  }
};

const pieChartSiswa = new ApexCharts(
  document.querySelector('#pie-chart-Siswa'),
  pieChartSiswaOptions
);
pieChartSiswa.render();


// PIE CHART - Jumlah Sekolah
const pieChartSekolahOptions = {
  series: [10, 26, 16, 24, 22, 27, 70, 30, 61, 50, 29, 17, 76, 42, 71, 39, 46, 26, 13, 15, 20, 49, 36, 69,52, 69,79, 77, 83, 20, 10, 47, 12, 11, 11, 11, 140, 12],
  chart: {
    width: 300,
    type: 'pie',
  },
  labels: daerahLabels,
  colors: ['#246dec', '#cc3c43', '#367952', '#f5b74f', '#4f35a1', '#f59342'],
  title: {
    text: 'Jumlah Sekolah'
  }
};

const pieChartSekolah = new ApexCharts(
  document.querySelector('#pie-chart-sekolah'),
  pieChartSekolahOptions
);
pieChartSekolah.render();