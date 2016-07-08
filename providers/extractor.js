var CPASBIEN_URL = 'http://www.cpasbien.cm';

const urlify = require('urlify').create({
  spaces: '-',
  nonPrintable: '-',
  trim: true
})

class Extractor {
  getTorrentURL (item) {
    const torrentName = urlify(this.getTitle(item).toLowerCase())
    return `${Settings.DOMAIN}/telechargement/${torrentName}.torrent`
  }
  getTitle (item) {
    return item.find('.titre').text()
  }
  getSeeds (item) {
    return item.find('.up .seed_ok').text()
  }
  getLeechs (item) {
    return item.find('.down').text()
  }
  getSize (item) {
    return item.find('.poid').text()
  }
  getCover (item) {
    return CPASBIEN_URL + '/_pictures/'+ urlify(this.getTitle(item).toLowerCase()) + '.jpg'
  }
}

module.exports = new Extractor()
