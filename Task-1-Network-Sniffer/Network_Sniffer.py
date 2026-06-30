
from scapy.all import sniff, IP, TCP, UDP, Raw

def analyze_packet(packet):
    print("\n" + "="*50)

    # Check if packet has an IP layer
    if IP in packet:
        ip_layer = packet[IP]
        src_ip = ip_layer.src
        dst_ip = ip_layer.dst
        proto_num = ip_layer.proto

        print(f"Source IP      : {src_ip}")
        print(f"Destination IP : {dst_ip}")

        # Identify protocol
        if TCP in packet:
            proto_name = "TCP"
            sport = packet[TCP].sport
            dport = packet[TCP].dport
            print(f"Protocol       : {proto_name}")
            print(f"Source Port    : {sport}")
            print(f"Destination Port: {dport}")

        elif UDP in packet:
            proto_name = "UDP"
            sport = packet[UDP].sport
            dport = packet[UDP].dport
            print(f"Protocol       : {proto_name}")
            print(f"Source Port    : {sport}")
            print(f"Destination Port: {dport}")

        else:
            print(f"Protocol       : Other (number {proto_num})")

        # Show payload if present
        if Raw in packet:
            payload = packet[Raw].load
            print(f"Payload (raw)  : {payload[:50]}")  # show first 50 bytes

    else:
        print("Non-IP packet captured")

def main():
    print("Starting packet capture... Press Ctrl+C to stop.\n")
    # count=0 means capture indefinitely; change to a number to limit packets
    sniff(prn=analyze_packet, count=20)

if __name__ == "__main__":
    main()