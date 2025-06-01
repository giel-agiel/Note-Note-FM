export const OLTCommandGuide = {
  title: "HUAWEI",
  sections: [
    {
      heading: "Check Konfigurasi OLT",
      content: ["display currentconfiguration"]
    },
    {
      heading: "Check Konfigurasi di dalam mode config",
      content: [
        "config",
        "interface gpon 0/1",
        "display this"
      ]
    },
    {
      heading: "Check ONT by SN",
      content: ["display ont info bysn [..serialnumber..]"]
    },
    {
      heading: "Check ONT by Desc",
      content: ["display ont info bydesc [..nama/sid user..]"]
    },
    {
      heading: "Check Status ONT by f/s/p ontid",
      content: [
        "display ont info [f] [s] [p] [ontid]",
        "display ont info [f] [s] [p] all",
        "display ont info summary [f]/[s]/[p]"
      ]
    },
    {
      heading: "Check Redaman ONT",
      content: [
        "display ont info option runstate 0 1 0 0",
        "config",
        "interface gpon [f]/[s]",
        "display ont opticalinfo [p] [ontid]",
        "display ont opticalinfo [p] all"
      ]
    },
    {
      heading: "Check WAN Status",
      content: [
        "display ont waninfo [f]/[s] [p] [ontid]",
        "(configif)#display ont waninfo [p] [ontid]"
      ]
    },
    {
      heading: "Check WLAN/WiFi/SSID Status",
      content: ["display ont wlaninfo [f]/[s] [p] [ontid]"]
    },
    {
      heading: "Check Jumlah Device yang terhubung ke ONT",
      content: [
        "display macaddress ont [f]/[s]/[p] [ontid]",
        "display ontlearnedmac 0/1/1 1 wlan"
      ]
    },
    {
      heading: "Check Semua MAC Address ONT",
      content: ["display macaddress vlan [vlanid]"]
    },
    {
      heading: "Check Konfigurasi ONT",
      content: [
        "display currentconfiguration ont [f]/[s]/[p] [ontid]",
        "display currentconfiguration | include raio",
        "display currentconfiguration section absconfig"
      ]
    },
    {
      heading: "Check Last Log Activity ONT",
      content: [
        "config",
        "interface gpon [f]/[s]",
        "display ont registerinfo [p] [ontid]"
      ]
    },
    {
      heading: "Check ONT yang belum terregistrasi",
      content: ["display ont autofind all"]
    },
    {
      heading: "Check Line Profile dan Service Profile",
      content: [
        "display ont lineprofile gpon all",
        "display ont srvprofile gpon all"
      ]
    },
    {
      heading: "Check Service Port",
      content: [
        "display serviceport all",
        "display serviceport [f]/[s]/[p] [ontid]"
      ]
    },
    {
      heading: "Check DDM dan Statistik",
      content: [
        "interface eth [f]/[s]",
        "display port ddm info [p]",
        "display statistics global"
      ]
    },
    {
      heading: "Check LOG dan LAN Port",
      content: [
        "display logbuffer",
        "interface gpon [f]/[s]",
        "display ont port state [p] [ontid] ethport all"
      ]
    },
    {
      heading: "Check Traffic ONT dan IGMP",
      content: [
        "interface gpon [f]/[s]",
        "display ont traffic [p] [ontid]",
        "display igmp user serviceport [srvportid]"
      ]
    },
    {
      heading: "Remote Ping dan Reset/Reboot ONT",
      content: [
        "ont remoteping [p] [ontid] ipaddress 8.8.8.8 packetcount 20",
        "ont reset [p] [ontid]",
        "ont factorysettingrestore [p]"
      ]
    },
    {
      heading: "Save dan Reboot OLT",
      content: ["save", "reboot system"]
    },
    {
      heading: "Troubleshoot: Tidak dapat IP",
      content: [
        "show subscriber | match [..serialnumber..]",
        "clear dhcp relay binding [..IP..]",
        "clear networkaccess aaa subscriber username",
        "ae1:2889++..."
      ]
    },
    {
      heading: "Menghapus ONT dan Bind VLAN",
      content: [
        "display ont info bysn [..sn..]",
        "undo serviceport [..service port..]",
        "ont delete [p] [ontid]",
        "ont ipconfig [p] [ontid] dhcp vlan [vlanid] priority 0"
      ]
    },
    {
      heading: "Step-by-Step Register ONT",
      content: [
        "ont add [p] [ontid] snauth [Serial Number] omci ...",
        "ont ipconfig [p] [ontid] dhcp/pppoe ...",
        "ont internetconfig / wanconfig / policyrouteconfig ...",
        "serviceport vlan ..."
      ]
    }
  ]
};
