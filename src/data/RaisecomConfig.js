export const RaisecomCommandGuide = {
  title: "RAISECOM",
  sections: [
    {
      heading: "Check konfigurasi OLT",
      content: ["show running-config"]
    },
    {
      heading: "Check f/s/p ONT dengan Serial Number",
      content: ["show interface gpon-onu sn | include [..serialnumber..]"]
    },
    {
      heading: "Check f/s/p ONT dengan Nama/SID User",
      content: ["show interface gpon-onu creation-information | include [..nama/sid user..]"]
    },
    {
      heading: "Check status ONT dengan f/s/p",
      content: ["show interface gpon-onu f/s/p online-information"]
    },
    {
      heading: "Check redaman ONT dengan f/s/p",
      content: ["show gpon-onu f/s/p transceiver"]
    },
    {
      heading: "Check WAN/Iphost ONT dengan f/s/p",
      content: ["show gpon-onu f/s/p iphost"]
    },
    {
      heading: "Check status LAN Port ONT",
      content: ["show gpon-onu uni ethernet information | include f/s/p"]
    },
    {
      heading: "Check perangkat ONT yang belum teregister/terconfig di OLT",
      content: ["show interface gpon-olt illegal-onu"]
    },
    {
      heading: "Check daftar ONT yang sudah teregister di OLT",
      content: [
        "show interface gpon-onu creation-information",
        "show gpon-onu information"
      ]
    },
    {
      heading: "Check redaman semua ONT di port tertentu",
      content: ["show interface gpon-olt f/s transceiver rx-onu-power"]
    },
    {
      heading: "Check redaman port OLT/DDM Detail",
      content: ["show interface gpon-olt f/s ddm detail"]
    },
    {
      heading: "Check threshold port OLT",
      content: ["show interface gpon-olt f/s ddm threshold-violation"]
    },
    {
      heading: "Check port uplink ke UPE yang aktif di OLT",
      content: [
        "show interface [gigabitethernet/ten-gigabitethernet]",
        "show running-config interface [gigabitethernet/ten-gigabitethernet] [port]"
      ]
    },
    {
      heading: "Check port OLT yang active/down",
      content: ["show interface gpon-olt"]
    },
    {
      heading: "Check Line Profile",
      content: [
        "show gpon-onu-line-profile all",
        "show gpon-onu-line-profile [profile-id]"
      ]
    },
    {
      heading: "Check Service Profile",
      content: [
        "show gpon-onu-service-profile all",
        "show gpon-onu-service-profile [profile-id]"
      ]
    },
    {
      heading: "Check Status SSID/WIFI di ONT",
      content: ["show gpon-onu f/s/p wifi information"]
    },
    {
      heading: "Check Konfigurasi ONT",
      content: [
        "show running-config gpon-onu f/s/p",
        "show running-config interface gpon-onu f/s/p"
      ]
    },
    {
      heading: "Check Jam & Waktu di OLT",
      content: ["show clock"]
    },
    {
      heading: "Check versi firmware OLT",
      content: ["show version"]
    },
    {
      heading: "Check statistics traffic OLT",
      content: [
        "show interface gpon-olt f/s statistics dynamic",
        "show interface [gigabitethernet/ten-gigabitethernet] [port] statistics dynamic"
      ]
    },
    {
      heading: "Check MAC Address by VLAN",
      content: ["show mac-address-table l2-address vlan [vlan-id]"]
    },
    {
      heading: "Check MAC Address by Port",
      content: ["show mac-address-table l2-address interface gpon-olt f/s"]
    },
    {
      heading: "Check MAC Address spesifik",
      content: ["show mac-address-table l2-address interface gpon-onu f/s/p"]
    },
    {
      heading: "Check IP Route NMS",
      content: ["show ip route all"]
    },
    {
      heading: "Check LOG di OLT",
      content: ["show logging history"]
    },
    {
      heading: "Check Detail Info ONT",
      content: ["show gpon-onu f/s/p detail-information"]
    },
    {
      heading: "Save konfigurasi OLT",
      content: ["write startup-config"]
    },
    {
      heading: "Reboot ONT",
      content: [
        "reboot gpon-onu f/s/p now",
        "reboot gpon-onu f/s/p",
        "config",
        "gpon-onu f/s/p",
        "reboot now",
        "reboot"
      ]
    },
    {
      heading: "Reboot OLT",
      content: ["reboot now", "reboot"]
    },
    {
      heading: "Reboot Slot OLT",
      content: ["reboot slot [slot-id]"]
    },
    {
      heading: "Test PING dari OLT",
      content: ["ping [A.B.C.D] count [value] size [value] waittime [value]"]
    },
    {
      heading: "Allow ONT menerima ping dari luar",
      content: [
        "config",
        "gpon-onu f/s/p",
        "access-control ping mode allowwan"
      ]
    },
    {
      heading: "Delete ONT",
      content: [
        "config",
        "interface gpon-olt f/s",
        "no create gpon-onu [onu-id/p]"
      ]
    },
    {
      heading: "Delete IPHOST di ONT",
      content: [
        "config",
        "gpon-onu f/s/p",
        "no iphost [iphost-id]"
      ]
    },
    {
      heading: "Rebind ONT",
      content: [
        "config",
        "interface gpon-onu f/s/p rebind sn [serial-number]"
      ]
    },
    {
      heading: "Deregister ONT",
      content: [
        "config",
        "interface gpon-onu f/s/p deregister"
      ]
    },
    {
      heading: "Add ulang Line & Service Profile",
      content: [
        "config",
        "interface gpon-onu f/s/p line-profile-id [profile-id] service-profile-id [profile-id]"
      ]
    },
    {
      heading: "Reset ONT by System",
      content: ["factory reset gpon-onu f/s/p now"]
    }
  ]
};
