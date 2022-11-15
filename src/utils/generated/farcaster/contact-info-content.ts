// automatically generated by the FlatBuffers compiler, do not modify

import * as flatbuffers from 'flatbuffers';

import { GossipAddressInfo, GossipAddressInfoT } from '../farcaster/gossip-address-info';


export class ContactInfoContent {
  bb: flatbuffers.ByteBuffer|null = null;
  bb_pos = 0;
  __init(i:number, bb:flatbuffers.ByteBuffer):ContactInfoContent {
  this.bb_pos = i;
  this.bb = bb;
  return this;
}

static getRootAsContactInfoContent(bb:flatbuffers.ByteBuffer, obj?:ContactInfoContent):ContactInfoContent {
  return (obj || new ContactInfoContent()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

static getSizePrefixedRootAsContactInfoContent(bb:flatbuffers.ByteBuffer, obj?:ContactInfoContent):ContactInfoContent {
  bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
  return (obj || new ContactInfoContent()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

peerId(index: number):number|null {
  const offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? this.bb!.readUint8(this.bb!.__vector(this.bb_pos + offset) + index) : 0;
}

peerIdLength():number {
  const offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? this.bb!.__vector_len(this.bb_pos + offset) : 0;
}

peerIdArray():Uint8Array|null {
  const offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? new Uint8Array(this.bb!.bytes().buffer, this.bb!.bytes().byteOffset + this.bb!.__vector(this.bb_pos + offset), this.bb!.__vector_len(this.bb_pos + offset)) : null;
}

gossipAddress(obj?:GossipAddressInfo):GossipAddressInfo|null {
  const offset = this.bb!.__offset(this.bb_pos, 6);
  return offset ? (obj || new GossipAddressInfo()).__init(this.bb!.__indirect(this.bb_pos + offset), this.bb!) : null;
}

rpcAddress(obj?:GossipAddressInfo):GossipAddressInfo|null {
  const offset = this.bb!.__offset(this.bb_pos, 8);
  return offset ? (obj || new GossipAddressInfo()).__init(this.bb!.__indirect(this.bb_pos + offset), this.bb!) : null;
}

excludedHashes(index: number):string
excludedHashes(index: number,optionalEncoding:flatbuffers.Encoding):string|Uint8Array
excludedHashes(index: number,optionalEncoding?:any):string|Uint8Array|null {
  const offset = this.bb!.__offset(this.bb_pos, 10);
  return offset ? this.bb!.__string(this.bb!.__vector(this.bb_pos + offset) + index * 4, optionalEncoding) : null;
}

excludedHashesLength():number {
  const offset = this.bb!.__offset(this.bb_pos, 10);
  return offset ? this.bb!.__vector_len(this.bb_pos + offset) : 0;
}

count():bigint {
  const offset = this.bb!.__offset(this.bb_pos, 12);
  return offset ? this.bb!.readUint64(this.bb_pos + offset) : BigInt('0');
}

static startContactInfoContent(builder:flatbuffers.Builder) {
  builder.startObject(5);
}

static addPeerId(builder:flatbuffers.Builder, peerIdOffset:flatbuffers.Offset) {
  builder.addFieldOffset(0, peerIdOffset, 0);
}

static createPeerIdVector(builder:flatbuffers.Builder, data:number[]|Uint8Array):flatbuffers.Offset {
  builder.startVector(1, data.length, 1);
  for (let i = data.length - 1; i >= 0; i--) {
    builder.addInt8(data[i]!);
  }
  return builder.endVector();
}

static startPeerIdVector(builder:flatbuffers.Builder, numElems:number) {
  builder.startVector(1, numElems, 1);
}

static addGossipAddress(builder:flatbuffers.Builder, gossipAddressOffset:flatbuffers.Offset) {
  builder.addFieldOffset(1, gossipAddressOffset, 0);
}

static addRpcAddress(builder:flatbuffers.Builder, rpcAddressOffset:flatbuffers.Offset) {
  builder.addFieldOffset(2, rpcAddressOffset, 0);
}

static addExcludedHashes(builder:flatbuffers.Builder, excludedHashesOffset:flatbuffers.Offset) {
  builder.addFieldOffset(3, excludedHashesOffset, 0);
}

static createExcludedHashesVector(builder:flatbuffers.Builder, data:flatbuffers.Offset[]):flatbuffers.Offset {
  builder.startVector(4, data.length, 4);
  for (let i = data.length - 1; i >= 0; i--) {
    builder.addOffset(data[i]!);
  }
  return builder.endVector();
}

static startExcludedHashesVector(builder:flatbuffers.Builder, numElems:number) {
  builder.startVector(4, numElems, 4);
}

static addCount(builder:flatbuffers.Builder, count:bigint) {
  builder.addFieldInt64(4, count, BigInt('0'));
}

static endContactInfoContent(builder:flatbuffers.Builder):flatbuffers.Offset {
  const offset = builder.endObject();
  builder.requiredField(offset, 4) // peer_id
  return offset;
}


unpack(): ContactInfoContentT {
  return new ContactInfoContentT(
    this.bb!.createScalarList(this.peerId.bind(this), this.peerIdLength()),
    (this.gossipAddress() !== null ? this.gossipAddress()!.unpack() : null),
    (this.rpcAddress() !== null ? this.rpcAddress()!.unpack() : null),
    this.bb!.createScalarList(this.excludedHashes.bind(this), this.excludedHashesLength()),
    this.count()
  );
}


unpackTo(_o: ContactInfoContentT): void {
  _o.peerId = this.bb!.createScalarList(this.peerId.bind(this), this.peerIdLength());
  _o.gossipAddress = (this.gossipAddress() !== null ? this.gossipAddress()!.unpack() : null);
  _o.rpcAddress = (this.rpcAddress() !== null ? this.rpcAddress()!.unpack() : null);
  _o.excludedHashes = this.bb!.createScalarList(this.excludedHashes.bind(this), this.excludedHashesLength());
  _o.count = this.count();
}
}

export class ContactInfoContentT {
constructor(
  public peerId: (number)[] = [],
  public gossipAddress: GossipAddressInfoT|null = null,
  public rpcAddress: GossipAddressInfoT|null = null,
  public excludedHashes: (string)[] = [],
  public count: bigint = BigInt('0')
){}


pack(builder:flatbuffers.Builder): flatbuffers.Offset {
  const peerId = ContactInfoContent.createPeerIdVector(builder, this.peerId);
  const gossipAddress = (this.gossipAddress !== null ? this.gossipAddress!.pack(builder) : 0);
  const rpcAddress = (this.rpcAddress !== null ? this.rpcAddress!.pack(builder) : 0);
  const excludedHashes = ContactInfoContent.createExcludedHashesVector(builder, builder.createObjectOffsetList(this.excludedHashes));

  ContactInfoContent.startContactInfoContent(builder);
  ContactInfoContent.addPeerId(builder, peerId);
  ContactInfoContent.addGossipAddress(builder, gossipAddress);
  ContactInfoContent.addRpcAddress(builder, rpcAddress);
  ContactInfoContent.addExcludedHashes(builder, excludedHashes);
  ContactInfoContent.addCount(builder, this.count);

  return ContactInfoContent.endContactInfoContent(builder);
}
}
