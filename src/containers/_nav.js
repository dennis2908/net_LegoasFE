let OpsiLayar = JSON.parse(localStorage.getItem('Layar')) ?? "";
let dataList = [];

if (OpsiLayar !== "") {

  if (OpsiLayar.filter(e => e.namaLayar === 'Menu Akun').length > 0) {
    dataList.push({
      name: 'List Akun',
      to: '/userdata/list'
    });
  }

  if (OpsiLayar.filter(e => e.namaLayar === 'Menu Pengguna').length > 0) {
    dataList.push({
      name: 'List Pengguna',
      to: '/pengguna/list'
    });
  }

  if (OpsiLayar.filter(e => e.namaLayar === 'Menu Kantor').length > 0) {
    dataList.push({
      name: 'List Kantor',
      to: '/kantor/list'
    })
  }

  if (OpsiLayar.filter(e => e.namaLayar === 'Menu Layar').length > 0) {
    dataList.push({
      name: 'List Layar',
      to: '/layar/list'
    })
  }

  if (OpsiLayar.filter(e => e.namaLayar === 'Menu Peran').length > 0) {
    dataList.push({
      name: 'List Peran',
      to: '/peran/list'
    })
  }

  if (OpsiLayar.filter(e => e.namaLayar === 'Menu Peran Layar').length > 0) {
    dataList.push({
      name: 'List Peran & Layar',
      to: '/peranLayar/list'
    })
  }

  if (OpsiLayar.filter(e => e.namaLayar === 'Menu Pengguna Akun').length > 0) {
    dataList.push({
      name: 'Pendaftaran Pengguna Akun',
      to: '/penggunaAkun/daftar'
    })
  }

}

var data =
{
  _name: 'CSidebarNav',
  _children: [
    {
      _name: 'CSidebarNavItem',
      name: 'Dashboard',
      to: '/dashboard',
      icon: 'cil-speedometer',
      badge: {
        color: 'primary',
        text: 'User Management'
      }
    },
    {
      _name: 'CSidebarNavDropdown',
      route: '/userdata',
      name: "List",
      icon: 'cil-puzzle',
      items: dataList
    },
    {
      _name: 'CSidebarNavDivider',
      _class: 'm-2'
    }
  ]
}

export default [data]