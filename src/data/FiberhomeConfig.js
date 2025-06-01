export const FiberhomeConfigGuide = {
  title: 'Fiberhome',
  sections: [
    {
      heading: 'Melihat Direktori OLT',
      content: ['dir']
    },
    {
      heading: 'Masuk Kedalam Direktori OLT',
      content: ['cd [dir-name]']
    },
    {
      heading: 'Kembali Ke Direktori Sebelumnya',
      content: ['cd ..']
    },
    {
      heading: 'Melihat F/S/P ONT by Serial Number',
      content: ['cd onu', 'show onu by [Serial Number]']
    },
    {
      heading: 'Melihat F/S/P ONT by Serial Number (alternatif)',
      content: ['cd onu', 'show onu-info by [Serial Number]']
    },
    {
      heading: 'Melihat Redaman/Optical Power/Link Budget ONT',
      content: ['cd onu', 'show onu opticalpower-info phy-id [Serial Number]']
    },
    {
      heading: 'Melihat Redaman/Optical Power/Link Budget ONT (alternatif)',
      content: ['cd onu', 'show optic_module slot [slot] pon [pon] onu [onu-id]']
    },
    {
      heading: 'Melihat WAN Info ONT',
      content: ['cd onu', 'show wan_info slot [slot] pon [pon] onu [onu-id]']
    },
    {
      heading: 'Melihat Semua ONT di Frame dan Slot Tertentu',
      content: ['cd onu', 'show authorization slot [slot] pon [pon]']
    },
    {
      heading: 'Melihat ONT-ONT yang Online di Frame & Slot Tertentu',
      content: ['cd onu', 'show online slot [slot] pon [pon]']
    },
    {
      heading: 'Melihat status ONT Active/Inactive di F/S/P tertentu',
      content: ['cd onu', 'show onu_state slot [slot] pon [pon] onulist [range onu-list]']
    },
    {
      heading: 'Melihat status ONT (alternatif)',
      content: ['cd onu', 'show onu slot [slot] pon [pon] onulist [onu-list]']
    },
    {
      heading: 'Melihat LOG Record ONT',
      content: ['cd onu', 'show onu_last_on_and_off_time slot [slot] pon [pon] onu [onu-id]']
    },
    {
      heading: 'Melihat Version ONT di F/S Tertentu',
      content: ['cd onu', 'show onu_ver slot [slot] pon [pon]']
    },
    {
      heading: 'Melihat Command-Command History yang di Execute',
      content: ['cd onu show history']
    },
    {
      heading: 'Melihat Status Port Ethernet/LAN di ONT Tertentu',
      content: ['cd onu', 'show feport_status slot [slot] pon [pon] onu [onu-id]']
    },
    {
      heading: 'Melihat ONT Yang Belum di Add/Illegal ONU/Unauthorized ONU',
      content: ['cd onu', 'show unauthlist']
    },
    {
      heading: 'Melihat Last Down Cause ONU/ONT',
      content: ['cd onu', 'show onu state-info slot [slot] pon [pon] onu [onu-id]']
    },
    {
      heading: 'Melihat VLAN Config',
      content: ['cd vlan', 'show vlan_port all show service_vlan all']
    },
    {
      heading: 'Melihat LOG OLT Dari Update History yang Terbaru',
      content: ['show log']
    },
    {
      heading: 'Melihat LOG Dari Update History yang Lama',
      content: ['show log reverse']
    },
    {
      heading: 'Melihat Statistik ONT (Total Active/Inactive ONT)',
      content: ['show statistics global']
    }
  ]
};
