import { ReligionKit, KitItem } from '../types';

const hinduItems: KitItem[] = [
  // Essential items
  { id: 'h1m', name: 'Male Antim Vastra', description: 'Traditional white dhoti and angavastra for men', price: 800, required: false, category: 'antim-vastra' },
  { id: 'h1f', name: 'Female Antim Vastra', description: 'Traditional white saree with blouse for women', price: 1000, required: false, category: 'antim-vastra' },
  { id: 'h2', name: 'Sacred Thread (Mauli/Kalava)', description: 'Traditional sacred thread for rituals', price: 0, required: true, category: 'essential' },
  { id: 'h3', name: 'Camphor (Kapoor)', description: 'Used for purification and rituals', price: 0, required: true, category: 'essential' },
  { id: 'h4', name: 'Cotton & Cloth (Tying)', description: 'Cotton and cloth pieces for tying rituals', price: 0, required: true, category: 'essential' },
  { id: 'h5', name: 'Ganga Jal / Tirth Jal', description: 'Holy water for purification', price: 0, required: true, category: 'essential' },
  { id: 'h6', name: 'White Chadar', description: 'White covering cloth for the body', price: 0, required: true, category: 'essential' },
  { id: 'h7', name: 'Earthen Pot (Matka)', description: 'Clay pot used in last rites rituals', price: 0, required: true, category: 'essential' },
  { id: 'h8', name: 'Fire Material (Lakdi, Samagri)', description: 'Wood and ritual material available at cremation ground', price: 0, required: true, category: 'essential' },

  // Regional Add-ons - North India
  { id: 'h9', name: 'Tulsi Leaves', description: 'Placed in mouth or on chest for purification (North India: UP, Bihar, Delhi, Haryana)', price: 0, required: false, category: 'regional' },
  { id: 'h10', name: 'Garland / Marigold Flowers', description: 'Floral offerings for rituals (North India)', price: 0, required: false, category: 'regional' },
  { id: 'h11', name: 'Sandalwood Paste / Powder', description: 'Used for tilak and rituals (North India)', price: 0, required: false, category: 'regional' },
  { id: 'h12', name: 'Agarbatti & Dhoopbatti', description: 'Incense sticks for rituals (North India)', price: 0, required: false, category: 'regional' },

  // Regional Add-ons - South India
  { id: 'h13', name: 'Banana Leaves', description: 'Placed beneath the body in rituals (South India: Tamil Nadu, Kerala, Karnataka, Andhra)', price: 0, required: false, category: 'regional' },
  { id: 'h14', name: 'Coconut', description: 'Kept near the head during rituals (South India)', price: 0, required: false, category: 'regional' },
  { id: 'h15', name: 'Betel Leaves & Areca Nut', description: 'Part of regional funeral customs (South India)', price: 0, required: false, category: 'regional' },
  { id: 'h16', name: 'Vibuthi (Bhasma / Holy Ash)', description: 'Sacred ash used in rituals (South India / Shaivite customs)', price: 0, required: false, category: 'regional' },

  // Regional Add-ons - West India
  { id: 'h17', name: 'Kumkum / Haldi', description: 'Tilak and ritual use (West India: Maharashtra, Gujarat, Rajasthan)', price: 0, required: false, category: 'regional' },
  { id: 'h18', name: 'Small Havan Kund + Samagri', description: 'For performing havan rituals (West India)', price: 0, required: false, category: 'regional' },
  { id: 'h19', name: 'Ghee Packet', description: 'Used in cremation fire rituals (West India)', price: 0, required: false, category: 'regional' },
  { id: 'h20', name: 'Sugar & Rice', description: 'For antyeshti rituals (West India)', price: 0, required: false, category: 'regional' },

  // Regional Add-ons - East India
  { id: 'h21', name: 'White Dhoti / Gamcha', description: 'Traditional cloth for Bengal customs (East India: Bengal, Odisha, Assam)', price: 0, required: false, category: 'regional' },
  { id: 'h22', name: 'Shankh (Conch Water Sprinkle)', description: 'Conch shell used for sprinkling water (East India)', price: 0, required: false, category: 'regional' },
  { id: 'h23', name: 'Banana Trunk', description: 'Sometimes placed under the body in rituals (East India). Optional, mainly Bengal/Odisha/Assam families', price: 0, required: false, category: 'regional' },

  // Caste-Specific Add-ons
  { id: 'h24', name: 'Rudraksha Mala', description: 'Sacred beads for Brahmins', price: 0, required: false, category: 'caste' },
  { id: 'h25', name: 'Extra Janeu (Sacred Thread)', description: 'For Brahmin customs where additional janeu is used', price: 0, required: false, category: 'caste' },
  { id: 'h26', name: 'Peacock Feather', description: 'Used in certain Kshatriya rituals', price: 0, required: false, category: 'caste' },
  { id: 'h27', name: 'Sword Symbol / Token', description: 'Traditional symbol sometimes placed for Kshatriyas', price: 0, required: false, category: 'caste' },
  { id: 'h28', name: 'Gomti Chakra', description: 'Sacred stone sometimes used in Vaishya rituals', price: 0, required: false, category: 'caste' }
];

const muslimItems: KitItem[] = [
  // Kafan options
  { id: 'm1', name: 'Male Kafan', description: '3-piece white cotton shroud for men (Izar, Rida, Lifafa)', price: 1200, required: false, category: 'kafan' },
  { id: 'm2', name: 'Female Kafan', description: '5-piece white cotton shroud for women (Izar, Khimar, Qamis, Rida, Lifafa)', price: 1500, required: false, category: 'kafan' },
  // Essential items
  { id: 'm3', name: 'Camphor', description: 'For purification rituals', price: 50, required: true, category: 'essential' },
  { id: 'm4', name: 'Rose Water', description: 'For cleansing and fragrance', price: 100, required: true, category: 'essential' },
  { id: 'm5', name: 'Cotton Wool', description: 'For body preparation', price: 80, required: true, category: 'essential' },
  { id: 'm6', name: 'Soap (Unscented)', description: 'Pure soap for ghusl', price: 40, required: true, category: 'essential' },
  // Regional additions
  { id: 'm7', name: 'Dates', description: 'For charity distribution', price: 200, required: false, category: 'regional' },
  { id: 'm8', name: 'Prayer Mat', description: 'For final prayers', price: 500, required: false, category: 'regional' },
  { id: 'm9', name: 'Quran (Small)', description: 'For recitation', price: 300, required: false, category: 'regional' }
];

const christianItems: KitItem[] = [
  // Essential items
  { id: 'c1', name: 'White Burial Clothes', description: 'Formal white attire', price: 1200, required: true, category: 'essential' },
  { id: 'c2', name: 'Cross Pendant', description: 'Christian cross for burial', price: 300, required: true, category: 'essential' },
  { id: 'c3', name: 'Bible', description: 'Holy Bible for final rites', price: 500, required: true, category: 'essential' },
  { id: 'c4', name: 'Holy Water', description: 'Blessed water for rituals', price: 50, required: true, category: 'essential' },
  { id: 'c5', name: 'Candles', description: 'For vigil and prayers', price: 100, required: true, category: 'essential' },
  // Denominational
  { id: 'c6', name: 'Rosary', description: 'For Catholic rituals', price: 400, required: false, category: 'regional' },
  { id: 'c7', name: 'Flowers (White)', description: 'For decoration', price: 300, required: false, category: 'regional' },
  { id: 'c8', name: 'Incense', description: 'For prayer ceremonies', price: 80, required: false, category: 'regional' }
];

const sikhItems: KitItem[] = [
  // Essential items
  { id: 's1', name: 'White Cloth', description: 'Pure white cotton for wrapping', price: 600, required: true, category: 'essential' },
  { id: 's2', name: 'Kirpan', description: 'Ceremonial sword', price: 800, required: true, category: 'essential' },
  { id: 's3', name: 'Kara', description: 'Steel bracelet', price: 200, required: true, category: 'essential' },
  { id: 's4', name: 'Turban Cloth', description: 'For head covering', price: 300, required: true, category: 'essential' },
  { id: 's5', name: 'Guru Granth Sahib (Small)', description: 'Holy book for recitation', price: 1000, required: true, category: 'essential' },
  // Additional
  { id: 's6', name: 'Khanda Symbol', description: 'Sikh religious symbol', price: 150, required: false, category: 'regional' },
  { id: 's7', name: 'Ghee for Lamp', description: 'For lighting diya', price: 100, required: false, category: 'regional' }
];

const buddhistItems: KitItem[] = [
  // Essential items
  { id: 'b1', name: 'Saffron Cloth', description: 'Traditional saffron shroud', price: 700, required: true, category: 'essential' },
  { id: 'b2', name: 'Lotus Flowers', description: 'Symbol of purity', price: 200, required: true, category: 'essential' },
  { id: 'b3', name: 'Incense Sticks', description: 'For meditation and prayer', price: 100, required: true, category: 'essential' },
  { id: 'b4', name: 'Prayer Beads', description: '108-bead mala for chanting', price: 500, required: true, category: 'essential' },
  { id: 'b5', name: 'Buddha Statue (Small)', description: 'For final blessing', price: 800, required: true, category: 'essential' },
  // Regional
  { id: 'b6', name: 'Tibetan Flags', description: 'Prayer flags for Tibetan Buddhism', price: 300, required: false, category: 'regional' },
  { id: 'b7', name: 'Singing Bowl', description: 'For sound meditation', price: 1200, required: false, category: 'regional' }
];

const jainItems: KitItem[] = [
  // Essential items
  { id: 'j1', name: 'White Cotton Cloth', description: 'Pure white shroud', price: 500, required: true, category: 'essential' },
  { id: 'j2', name: 'Sacred Water', description: 'Purified water for rituals', price: 50, required: true, category: 'essential' },
  { id: 'j3', name: 'Flowers (White)', description: 'For offering', price: 150, required: true, category: 'essential' },
  { id: 'j4', name: 'Jain Symbols', description: 'Religious symbols for blessing', price: 200, required: true, category: 'essential' },
  { id: 'j5', name: 'Grain for Charity', description: 'For dana (charity)', price: 300, required: true, category: 'essential' },
  // Sect specific
  { id: 'j6', name: 'Marble Dust', description: 'For Svetambara sect', price: 100, required: false, category: 'caste' },
  { id: 'j7', name: 'Sacred Books', description: 'Jain scriptures', price: 600, required: false, category: 'regional' }
];

const otherItems: KitItem[] = [
  // Essential items
  { id: 'o1', name: 'White Cotton Cloth', description: 'Pure white shroud for burial/cremation', price: 500, required: true, category: 'essential' },
  { id: 'o2', name: 'Flowers (White)', description: 'White flowers for ceremony', price: 200, required: true, category: 'essential' },
  { id: 'o3', name: 'Candles', description: 'For prayers and vigil', price: 100, required: true, category: 'essential' },
  { id: 'o4', name: 'Incense', description: 'For purification and prayers', price: 80, required: true, category: 'essential' },
  { id: 'o5', name: 'Sacred Water', description: 'Blessed or purified water', price: 50, required: true, category: 'essential' },
  // Optional
  { id: 'o6', name: 'Prayer Book', description: 'Generic prayer book for ceremonies', price: 300, required: false, category: 'regional' },
  { id: 'o7', name: 'Memorial Items', description: 'Personal memorial items and keepsakes', price: 500, required: false, category: 'regional' }
];

export const religionKits: ReligionKit[] = [
  { religionId: 'hindu', items: hinduItems },
  { religionId: 'muslim', items: muslimItems },
  { religionId: 'christian', items: christianItems },
  { religionId: 'sikh', items: sikhItems },
  { religionId: 'buddhist', items: buddhistItems },
  { religionId: 'jain', items: jainItems },
  { religionId: 'other', items: otherItems }
];