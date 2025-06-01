export const ZyxelConfigGuide = {
  title: 'Zyxel',
  sections: [
    {
      heading: 'Check Semua Konfigurasi Realtime',
      content: ['show running-config']
    },
    {
      heading: 'Check Semua Konfigurasi Awal',
      content: ['show startup-config']
    },
    {
      heading: 'Check Semua Konfigurasi Realtime Pada Bagian Tertentu',
      content: ['show running-config [keyword]']
    },
    {
      heading: 'Check Semua Status Interface',
      content: ['show description interface']
    },
    {
      heading: 'Check Status Interface Tertentu',
      content: ['show interface ethernet [port-number]']
    },
    {
      heading: 'Check Redaman Port',
      content: [
        'show interface ethernet [port-number]',
        'show interface sfp ethernet [port-number]'
      ]
    },
    {
      heading: 'Check Semua MAC address',
      content: ['show mac-address-table dynamic']
    },
    {
      heading: 'Check MAC address VLAN tertentu',
      content: ['show mac-address-table dynamic vlan [vlan-id]']
    },
    {
      heading: 'Check MAC address pada Interface tertentu',
      content: ['show mac-address-table dynamic interface ethernet [port-id]']
    },
    {
      heading: 'Check Log',
      content: ['show logging buffered level-list [level-number]']
    },
    {
      heading: 'Save Config',
      content: ['show running-config startup-config']
    },
    {
      heading: 'Reboot',
      content: ['reboot > yes']
    },
    {
      heading: 'Disable/Enable Port',
      content: [
        'configure terminal interface ethernet [port-id] shutdown',
        'configure terminal interface ethernet [port-id] no shutdown'
      ]
    },
    {
      heading: 'Set Deskripsi Interface',
      content: [
        'configure terminal interface ethernet [port-id]',
        'description "Trunk to [terminasi/hostname]"'
      ]
    },
    {
      heading: 'Set VLAN di Interface',
      content: [
        'configure terminal interface ethernet [port-id] switchport mode trunk',
        'switchport trunk allowed vlan [vlan-id 1],[vlan-id 2],[vlan-id 3]'
      ]
    },
    {
      heading: 'Set DHCP Option82',
      content: ['dhcp option82 strategy keep']
    }
  ]
};

export const BdcomConfigGuide = {
  title: 'BDCOM',
  sections: [
    {
      heading: 'Check Semua Konfigurasi',
      content: ['show running-config']
    },
    {
      heading: 'Check Semua Konfigurasi VLAN',
      content: ['show running-config | begin vlan', 'show vlan']
    },
    {
      heading: 'Check Konfigurasi pada Interface Spesifik',
      content: ['show running-config interface [Eth/Gig] [port-number]']
    },
    {
      heading: 'Check Semua Status Interface',
      content: ['show interface brief']
    },
    {
      heading: 'Check Status Interface Tertentu',
      content: ['show interface [Eth/Giga] [port-number]']
    },
    {
      heading: 'Check Semua MAC address',
      content: ['show mac address-table dynamic']
    },
    {
      heading: 'Check MAC VLAN tertentu',
      content: ['show mac address-table dynamic vlan [vlan-id]']
    },
    {
      heading: 'Check MAC pada Interface tertentu',
      content: ['show mac address-table dynamic interface [Ethernet/Gigabit] [port-number]']
    },
    {
      heading: 'Check Log',
      content: ['show logging']
    },
    {
      heading: 'Save Config',
      content: ['write all']
    },
    {
      heading: 'Reboot',
      content: ['reboot noconfirm', 'reboot > yes']
    },
    {
      heading: 'Shutdown/Enable Port',
      content: [
        'config',
        'interface [Ethernet/Gigabit] [port-number]',
        'shutdown / no shutdown'
      ]
    },
    {
      heading: 'Set Deskripsi Interface',
      content: [
        'config',
        'interface [Ethernet/Gigabit] [port-number]',
        'description [SID-NAMA CUST-NMS]'
      ]
    }
  ]
};

export const HpConfigGuide = {
  title: 'HP',
  sections: [
    {
      heading: 'Check Semua Konfigurasi',
      content: ['display current-configuration']
    },
    {
      heading: 'Check Konfigurasi Interface Spesifik',
      content: ['display current-configuration interface [Ethernet/Gigabit/Tengig] [port-number]']
    },
    {
      heading: 'Check Semua Status Interface',
      content: ['display interface brief']
    },
    {
      heading: 'Check Status Interface Tertentu',
      content: ['display interface [Ethernet/Gigabit/Tengig] [port-number]']
    },
    {
      heading: 'Check Redaman Port',
      content: ['display transceiver interface [Ethernet/Gigabit/Tengig] [port-number]']
    },
    {
      heading: 'Check Semua MAC Address',
      content: ['display mac-address dynamic']
    },
    {
      heading: 'Check Total MAC Address',
      content: ['display mac-address dynamic count']
    },
    {
      heading: 'Check MAC VLAN tertentu',
      content: ['display mac-address dynamic vlan [vlan-id]']
    },
    {
      heading: 'Check MAC pada Interface tertentu',
      content: ['display mac-address dynamic interface [Ethernet/Gigabit/Tengig] [port-number]']
    },
    {
      heading: 'Check Log',
      content: [
        'display logbuffer',
        'display logbuffer level [level-severity]'
      ]
    },
    {
      heading: 'Save Config',
      content: ['save all']
    },
    {
      heading: 'Reboot',
      content: ['reboot / reboot force']
    },
    {
      heading: 'Shutdown/Enable Port',
      content: [
        'system-view',
        'interface [Ethernet/Gigabit] [port-number]',
        'shutdown / undo shutdown'
      ]
    },
    {
      heading: 'Set Deskripsi Interface',
      content: [
        'system-view',
        'interface [Ethernet/Gigabit] [port-number]',
        'description SID-Nama User - Trunk to [terminasi/hostname]'
      ]
    },
    {
      heading: 'Create VLAN',
      content: [
        'system-view',
        'vlan [vlan-id]',
        'description [name-description]'
      ]
    },
    {
      heading: 'Set VLAN di Interface',
      content: [
        'system-view',
        'interface [Ethernet/Gigabit/Tengig] [port-number] port link-type [trunk/access]',
        'port trunk permit vlan [vlan-id 1 vlan-id 2 vlan-id 3]'
      ]
    },
    {
      heading: 'Set DHCP Snooping',
      content: [
        'system-view',
        'interface [Ethernet/Gigabit/Tengig] [port-number]',
        'dhcp snooping information enable',
        'dhcp snooping information circuit-id string [SID User]',
        'dhcp snooping information circuit-id vlan [vlan-id] string [SID User]'
      ]
    }
  ]
};
