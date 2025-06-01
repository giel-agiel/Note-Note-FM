export const MikrotikConfigGuide = {
  title: 'Mikrotik',
  sections: [
    {
      heading: 'Check Semua Konfigurasi / Running Config',
      content: ['/export compact hide-sensitive']
    },
    {
      heading: 'Check IP DHCP Client/Check IPHOST',
      content: ['ip dhcp-client print']
    },
    {
      heading: 'Check Semua Interface',
      content: [
        'interface print',
        'interface print brief',
        'interface print detail'
      ]
    },
    {
      heading: 'Check List Semua VLAN',
      content: ['ip interface vlan print']
    },
    {
      heading: 'Check List IP Address',
      content: ['ip address print']
    },
    {
      heading: 'Check Routing Table',
      content: ['ip route print']
    },
    {
      heading: 'Check Konfigurasi NAT',
      content: ['ip firewall nat print']
    },
    {
      heading: 'Check IP DNS',
      content: ['ip dns print']
    },
    {
      heading: 'Check MAC Binding',
      content: ['ip arp print']
    },
    {
      heading: 'Check IP DHCP Server Local LAN',
      content: ['ip dhcp-server print']
    },
    {
      heading: 'Check IP Pool / DHCP Local LAN',
      content: ['ip pool print']
    },
    {
      heading: 'Check WIFI/SSID',
      content: ['interface wireless print']
    },
    {
      heading: 'Check Status Service (Telnet/Winbox/SSH)',
      content: ['ip service print']
    },
    {
      heading: 'Check Hostname',
      content: ['system identity print']
    },
    {
      heading: 'Check Timestamp/Clock',
      content: ['system clock print']
    },
    {
      heading: 'Check SNMP Community',
      content: ['snmp community print']
    },
    {
      heading: 'Check Interface Bridge',
      content: ['interface bridge print']
    },
    {
      heading: 'Check Bridge Port',
      content: ['interface bridge port print']
    },
    {
      heading: 'Check Log History',
      content: ['log print']
    },
    {
      heading: 'Check Health/Temp Mikrotik',
      content: ['system health print']
    },
    {
      heading: 'Check Utilitas Perangkat Mikrotik',
      content: ['system resource print']
    },
    {
      heading: 'Check History Command',
      content: ['system history print']
    },
    {
      heading: 'Check Versi Mikrotik',
      content: ['system routerboard print']
    },
    {
      heading: 'ACTION COMMAND: Test Ping',
      content: ['ping count=10 [ip-address]']
    },
    {
      heading: 'Traceroute',
      content: ['tool traceroute [ip-address]']
    },
    {
      heading: 'Reboot Mikrotik',
      content: ['system reboot']
    },
    {
      heading: 'Reset Konfigurasi MikroTik',
      content: ['system reset-configuration no-defaults=yes']
    },
    {
      heading: 'Backup/Save Konfigurasi Mikrotik',
      content: ['system backup save name=[nama file backup]']
    },
    {
      heading: 'Load Konfigurasi Mikrotik',
      content: [
        'system backup load name=?',
        'system backup load name=[nama file backup]'
      ]
    },
    {
      heading: 'Set VLAN di Interface',
      content: ['interface vlan set interface=[interface] name=[name-interface] vlan-id=[vlan-id]']
    },
    {
      heading: 'Set IP DHCP Client',
      content: ['ip dhcp-client set disabled=no interface=[interface-vlanservice]']
    },
    {
      heading: 'Set Static IP Address di Interface',
      content: ['ip address set address=[ip-address/netmask] interface=[name-interface] network=[ip-network]']
    },
    {
      heading: 'Set IP Firewall NAT',
      content: ['ip firewall nat set action=masquerade chain=srcnat out-interface=[interface-vlan]']
    },
    {
      heading: 'Set DHCP Server untuk Local Network',
      content: [
        'ip dhcp-server network set add address=[ip-network/netmask] gateway=[gateway-network]',
        'ip pool set name=[pool-name] ranges=[range-hosts] ip dhcp-server address-pool=[pool-name] disabled=no interface=[name-interface] name=[name-dhcp]'
      ]
    },
    {
      heading: 'Shutdown Port Interface',
      content: ['interface [interface] [interface-number] disable=yes']
    },
    {
      heading: 'Monitor Traffic Interface',
      content: ['interface monitor-traffic interface=[interface]']
    },
    {
      heading: 'Set Clock/Timestamp',
      content: ['system clock set time-zone-name=Asia/Jakarta date=[month/DD/YYYY] time=[HH:MM:SS]']
    }
  ]
};
