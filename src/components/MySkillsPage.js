import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { lightTheme } from "./Themes";
import { Design, Develope } from "./AllSvgs";
import PowerButton from "../subComponents/PowerButton";
import LogoComponent from "../subComponents/LogoComponents";
import SocialIcon from "../subComponents/SocialIcon";
import ParticleComponent from "../subComponents/ParticleComponent";

const Box = styled.div`
  background-color: ${(props) => props.theme.body};
  width: 100vw;
  height: 100vh;
  position: relative;
  display: flex;
  justify-content: space-evenly;
`;
const Main = styled.div`
  border: 2px solid ${(props) => props.theme.text};
  color: ${(props) => props.theme.text};
  background-color: ${(props) => props.theme.body};
  padding: 2.5rem;
  width: 30vw;
  height: 60vh;
  z-index: 3;
  line-height: 1.5;
  cursor: pointer;
  margin: 10vh 0;
  overflow-y: auto; /* ✅ Scroll untuk konten panjang */
  scrollbar-width: thin; /* ✅ Untuk Firefox */
  scrollbar-color: ${(props) => props.theme.text} transparent;

  font-family: "Ubuntu Mono", monospace;
  display: flex;
  flex-direction: column;
  justify-content: flex-start; /* ✅ Untuk mendorong isi ke atas */
  border-radius: 20px;

  &:hover {
    color: ${(props) => props.theme.body};
    background-color: ${(props) => props.theme.text};
  }

  &::-webkit-scrollbar {
    width: 6px; /* ✅ Scrollbar kecil */
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${(props) => props.theme.text};
    border-radius: 10px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }
`;
const Title = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(1em + 1vw);

  ${Main}:hover & {
    & > * {
      fill: ${(props) => props.theme.body};
    }
  }

  & > *:first-child {
    margin-right: 1rem;
  }
`;
const Description = styled.div`
  color: ${(props) => props.theme.text};
  font-size: calc(0.1em + 1vw);
  padding: 0.5rem 0;

  ${Main}:hover & {
    color: ${(props) => props.theme.text};
    strong {
      color: ${(props) => props.theme.textHover || '#FFF8E6'}; /* fallback if textHover is undefined */
    }
  }

  strong {
    margin-bottom: 1rem;
    text-transform: uppercase;
    transition: color 0.3s ease;

  }    

  ul {
    padding-left: 1rem;
    list-style: disc;
  }

  li {
    margin-bottom: 1.5rem;
  }

  pre {
    white-space: pre-wrap;
    word-break: break-word;
    background-color: ${(props) => props.theme.body};
    border: 1px solid ${(props) => props.theme.text};
    padding: 0.5rem;
    border-radius: 6px;
  }
`;

const MySkillsPage = () => {
  return (
    <ThemeProvider theme={lightTheme}>
      <Box>
        <LogoComponent theme="light" />
        <SocialIcon theme="light" />
        <PowerButton />
        <ParticleComponent theme="light" />
        <Main>
          <Title>
            <Design width={40} height={40} /> ASR 920
          </Title>
          <Description>
            <ul>
              <li>
                <strong>Melihat Interface-Interface</strong>
                <pre>
                  <code>show interface description</code>
                </pre>
              </li>

              <li>
                <strong>Mencari Interface Spesifik</strong>
                <pre>
                  <code>
                    show interface description | include [keyword, contoh : OLT,
                    ASR, CPE]
                  </code>
                </pre>
              </li>

              <li>
                <strong>Melihat Interface Spesifik</strong>
                <pre>
                  <code>
                    show interface [interface, contoh : Gi0/0/0, Te0/0/0]
                  </code>
                </pre>
              </li>

              <li>
                <strong>Melihat Konfigurasi Interface Spesifik</strong>
                <pre>
                  <code>
                    show running-config interface [interface, contoh : Gi0/0/0,
                    Te0/0/0]
                  </code>
                </pre>
              </li>

              <li>
                <strong>Melihat Traffic pada Interface</strong>
                <pre>
                  <code>show interface [interface] | include rate</code>
                </pre>
              </li>

              <li>
                <strong>Melihat Redaman Rx/Tx pada Interface</strong>
                <pre>
                  <code>show interface [interface] transceiver detail</code>
                </pre>
              </li>

              <li>
                <strong>Melihat CRC pada Interface</strong>
                <pre>
                  <code>show interface [interface] | include CRC</code>
                </pre>
              </li>

              <li>
                <strong>Melihat Log History</strong>
                <pre>
                  <code>show logging history</code>
                </pre>
                <pre>
                  <code>
                    show logging | include [keyword, contoh : 0/0/20, 2900]
                  </code>
                </pre>
              </li>

              <li>
                <strong>Melihat MAC Address pada Interface Spesifik</strong>
                <pre>
                  <code>
                    show mac address-table dynamic | include [interface, contoh
                    : Gi0/0/20]
                  </code>
                </pre>
              </li>

              <li>
                <strong>Melihat Bridge-Domain VLAN</strong>
                <pre>
                  <code>show bridge-domain [vlan-id]</code>
                </pre>
              </li>

              <li>
                <strong>Melihat MPLS VLAN pada UPE</strong>
                <pre>
                  <code>show mpls l2transport vc</code>
                </pre>
              </li>

              <li>
                <strong>
                  Melihat Routing/Next Hop Interface yang mengarah ke Dest.
                  Address
                </strong>
                <pre>
                  <code>show ip route [ip-address]</code>
                </pre>
              </li>

              <li>
                <strong>Melihat Neighbor Bridge Domain VLAN</strong>
                <pre>
                  <code>show bridge-domain [vlan-id]</code>
                </pre>
              </li>

              <li>
                <strong>ACTION COMMAND :</strong>
                <ul>
                  <li>
                    <strong>Ping Command</strong>
                    <pre>
                      <code>
                        ping [ip-address] size [size-value] repeat
                        [repeat-value]
                      </code>
                    </pre>
                  </li>
                  <li>
                    <strong>Ping MPLS Pseudowire</strong>
                    <pre>
                      <code>
                        ping mpls pseudowire [ip-address] [pw-id] size
                        [size-value] repeat [repeat-value]
                      </code>
                    </pre>
                  </li>
                  <li>
                    <strong>Ping MPLS IPv4</strong>
                    <pre>
                      <code>
                        ping mpls ipv4 [ip-address]/32 size [size-value] repeat
                        [repeat-value]
                      </code>
                    </pre>
                  </li>
                  <li>
                    <strong>Traceroute MPLS</strong>
                    <pre>
                      <code>traceroute mpls ipv4 [ip-address]/32</code>
                    </pre>
                  </li>
                  <li>
                    <strong>Ping VRF / P2P to OLT</strong>
                    <pre>
                      <code>
                        ping vrf [vrf instance name, contoh:WAN-NMS-JKT]
                        [ip-nms] size [size-value] repeat [repeat-value]
                      </code>
                    </pre>
                  </li>
                  <li>
                    <strong>Telnet VRF</strong>
                    <pre>
                      <code>telnet vrf [vrf-name] [destination-ip]</code>
                    </pre>
                  </li>
                </ul>
              </li>
            </ul>
          </Description>
        </Main>

        <Main>
          <Title>
            <Develope width={40} height={40} /> NE 8000
          </Title>
          <Description>
            <ul>
              <li>
                <strong>Melihat Interface-Interface</strong>
                <pre>
                  <code>display interface description</code>
                </pre>
                <pre>
                  <code>display interface brief</code>
                </pre>
              </li>

              <li>
                <strong>Mencari Interface Spesifik</strong>
                <pre>
                  <code>
                    display interface description | include [keyword, contoh :
                    OLT, ASR, NMS]
                  </code>
                </pre>
              </li>

              <li>
                <strong>Melihat Interface Spesifik</strong>
                <pre>
                  <code>display interface [Eth/Gig] [port-number]</code>
                </pre>
              </li>

              <li>
                <strong>Melihat Konfigurasi Interface Spesifik</strong>
                <pre>
                  <code>display current-configuration</code>
                </pre>
                <pre>
                  <code>
                    display current-configuration interface [Eth/Gig]
                    [port-number]
                  </code>
                </pre>
              </li>

              <li>
                <strong>Melihat Traffic pada Interface</strong>
                <pre>
                  <code>
                    display interface [Eth/Gig] [port-number] | include rate
                  </code>
                </pre>
              </li>

              <li>
                <strong>Melihat Redaman Rx/Tx pada Interface</strong>
                <pre>
                  <code>
                    display optical-module extend information interface
                    [Eth/Gig] [port-number]
                  </code>
                </pre>
                <pre>
                  <code>display optical-module brief</code>
                </pre>
                <pre>
                  <code>
                    display interface [Eth/Gig] [port-number] | begin Rx Power
                  </code>
                </pre>
              </li>

              <li>
                <strong>Melihat CRC pada Interface</strong>
                <pre>
                  <code>
                    display interface [Eth/Gig] [port-number] | include CRC
                  </code>
                </pre>
              </li>

              <li>
                <strong>Melihat Log History</strong>
                <pre>
                  <code>display logbuffer</code>
                </pre>
              </li>

              <li>
                <strong>Melihat Semua MAC Address</strong>
                <pre>
                  <code>display mac-address dynamic</code>
                </pre>
                <pre>
                  <code>display mac-address dynamic verbose</code>
                </pre>
              </li>

              <li>
                <strong>
                  Melihat Semua MAC Address VLAN tertentu / Bridge-Domain VLAN
                </strong>
                <pre>
                  <code>display mac-address bridge-domain [vlan-id]</code>
                </pre>
              </li>

              <li>
                <strong>Melihat MAC Address pada Interface Spesifik</strong>
                <pre>
                  <code>
                    display mac-address dynamic interface [Eth/Gig]
                    [port-number].[vlan-id]
                  </code>
                </pre>
              </li>

              <li>
                <strong>Melihat MPLS VLAN pada UPE</strong>
                <pre>
                  <code>display vsi peer-info</code>
                </pre>
              </li>

              <li>
                <strong>
                  Melihat Routing/Next Hop Interface PW yang mengarah ke Dest.
                  Address
                </strong>
                <pre>
                  <code>
                    display ip routing-table [ip-address] display vsi pw
                    out-interface
                  </code>
                </pre>
              </li>

              <li>
                <strong>Melihat Timestamp/Clock</strong>
                <pre>
                  <code>display clock</code>
                </pre>
              </li>

              <li>
                <strong>Melihat CPU Usage & History Usage</strong>
                <pre>
                  <code>
                    display cpu-usage slot [slot-number] | begin Details display
                    cpu-usage history 72hour
                  </code>
                </pre>
              </li>

              <li>
                <strong>Melihat IP Address Interface</strong>
                <pre>
                  <code>display ip interface brief</code>
                </pre>
              </li>

              <li>
                <strong>Melihat Routing Table</strong>
                <pre>
                  <code>display ip routing-table protocol ospf</code>
                </pre>
              </li>

              <li>
                <strong>ACTION COMMAND :</strong>
                <ul>
                  <li>
                    <strong>Ping Command</strong>
                    <pre>
                      <code>ping -brief -c 100 -m [dest-address]</code>
                    </pre>
                  </li>
                  <li>
                    <strong>Ping MPLS Pseudowire</strong>
                    <pre>
                      <code>ping -brief -c 100 -m [dest-address]</code>
                    </pre>
                    <pre>
                      <code>ping vpls vsi [vlan-id] peer [dest-address]</code>
                    </pre>
                  </li>
                  <li>
                    <strong>Traceroute MPLS</strong>
                    <pre>
                      <code>tracert -w 250 [dest-address]</code>
                    </pre>
                  </li>
                  <li>
                    <strong>Ping VRF / P2P to OLT</strong>
                    <pre>
                      <code>
                        ping -brief -c 50 -m 18 -vpn-instance [vpn-instance,
                        contoh:WAN-NMS-ICON] [dest-address]
                      </code>
                    </pre>
                  </li>
                  <li>
                    <strong>Telnet VRF</strong>
                    <pre>
                      <code>
                        telnet vpn-instance [vpn-instance, contoh:WAN-NMS-ICON]
                        [dest-address/ip-olt]
                      </code>
                    </pre>
                  </li>
                </ul>
              </li>
            </ul>
          </Description>
        </Main>
      </Box>
    </ThemeProvider>
  );
};

export default MySkillsPage;
