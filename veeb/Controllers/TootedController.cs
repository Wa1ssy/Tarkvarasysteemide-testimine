using Microsoft.AspNetCore.Mvc;
using veeb.models;

namespace veeb.Controllers
{
    [Route("api/[controller]")] // Marsruutimise atribuut: aadress algab api/Tooted
    [ApiController] // Näitab, et tegemist on API kontrolleriga
    public class TootedController : ControllerBase
    {
        // Kontrolleriga töötavate toodete loetelu
        private static List<Toode> _tooted = new List<Toode>{
        new Toode(1,"Koola", 1.5, true),
        new Toode(2,"Fanta", 1.0, false),
        new Toode(3,"Sprite", 1.7, true),
        new Toode(4,"Vichy", 2.0, true),
        new Toode(5,"Vitamin well", 2.5, true)
        };


        // https://localhost:7052/tooted
        [HttpGet]
        // Tagastab kõigi toodete nimekirja
        public List<Toode> Get()
        {
            return _tooted;
        }

        // GET: api/Tooted/kustuta/{index} - Marsruut
        [HttpGet("kustuta/{index}")]
        // Meetod kauba indeksi järgi nimekirjast eemaldamiseks
        public List<Toode> Delete(int index)
        {
            _tooted.RemoveAt(index); // Kustutab toote 
            return _tooted; // Tagastab uuendatud nimekirja
        }

        // GET: api/Tooted/kustuta2/{index} - Marsruut
        [HttpGet("kustuta2/{index}")]
        // Meetod kauba eemaldamiseks indeksi järgi tekstisõnumiga
        public string Delete2(int index)
        {
            _tooted.RemoveAt(index);
            return "Kustutatud!";
        }

        // GET: api/Tooted/lisa/{id}/{nimi}/{hind}/{aktiivne} - Marsruut
        // Meetod uue toote lisamiseks parameetritega
        [HttpGet("lisa/{id}/{nimi}/{hind}/{aktiivne}")]
        public List<Toode> Add(int id, string nimi, double hind, bool aktiivne)
        {
            Toode toode = new Toode(id, nimi, hind, aktiivne);  // Loob uue toote
            _tooted.Add(toode); // Lisab toote nimekirja
            return _tooted;
        }

        // GET: api/Tooted/lisa - Marsruut
        // Meetod uue toote lisamiseks päringu parameetrite kaudu
        [HttpGet("lisa")] // GET /tooted/lisa?id=1&nimi=Koola&hind=1.5&aktiivne=true
        public List<Toode> Add2([FromQuery] int id, [FromQuery] string nimi, [FromQuery] double hind, [FromQuery] bool aktiivne)
        {
            Toode toode = new Toode(id, nimi, hind, aktiivne);  // Loob uue toote
            _tooted.Add(toode); // Lisab toote nimekirja
            return _tooted;
        }

        // GET: api/Tooted/hind-dollaritesse/{kurss} - Marsruut
        // Meetod kaupade hindade ümberarvestamiseks dollaritesse kindlaksmääratud kursi
        [HttpGet("hind-dollaritesse/{kurss}")] // GET /tooted/hind-dollaritesse/1.5
        public List<Toode> Dollaritesse(double kurss)
        {
            for (int i = 0; i < _tooted.Count; i++) // Rakendab kursust kõikidele kaupadele
            {
                _tooted[i].Price = _tooted[i].Price * kurss; // Korrutab iga kauba hinna kursiga
            }
            return _tooted; // Tagastab uuendatud toodete nimekirja uute hindadega
        }

        // või foreachina:

        // GET: api/Tooted/hind-dollaritesse2/{kurss} - Marsruut
        [HttpGet("hind-dollaritesse2/{kurss}")] // GET /tooted/hind-dollaritesse2/1.5
        public List<Toode> Dollaritesse2(double kurss)
        {
            foreach (var t in _tooted) // Rakendab kursust kõikidele kaupadele läbi foreach
            {
                t.Price = t.Price * kurss;
            }

            return _tooted;
        }
    }
}
