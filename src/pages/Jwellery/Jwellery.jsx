import React from 'react';

export default function JewelryPage() {
  const containerStyle = {
    fontFamily: 'Arial, sans-serif',
    padding: '2rem',
    backgroundColor: '#f9f9f9',
    minHeight: '100vh',
    color: '#333',
  };

  const headerStyle = {
    textAlign: 'center',
    marginBottom: '2rem',
  };

  const cardContainerStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '1.5rem',
    justifyContent: 'center',
    marginTop: '2rem',
  };

  const cardStyle = {
    backgroundColor: '#fff',
    padding: '1.5rem',
    borderRadius: '10px',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
    width: '250px',
    textAlign: 'center',
  };

  const imageStyle = {
    width: '100%',
    height: '180px',
    objectFit: 'cover',
    borderRadius: '8px',
    marginBottom: '1rem',
  };

  const priceStyle = {
    fontWeight: 'bold',
    fontSize: '1.1rem',
    color: '#c2185b',
    marginTop: '0.5rem',
  };

  const footerStyle = {
    textAlign: 'center',
    marginTop: '3rem',
    paddingTop: '1rem',
    borderTop: '1px solid #ccc',
    fontSize: '0.9rem',
    color: '#666',
  };
  const buttonStyle = {
    margin:'auto',
    maxWidth:'110px',
    padding: '0.7rem 1.0rem',
    fontSize: '1rem',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    textDecoration: 'none',
  };
  const jewelryItems = [
    {
      name: 'Gold Necklace',
      description: 'Elegant 22K handcrafted gold necklace.',
      price: '₹15,999',
      image: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUSEhIVEhUVEBAVDxUVEBUQFRIVFRUWFhUVFRUYHSkgGBolHRUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGxAQGi8mICYrLS0wLS4tLSstLS0tLS0tLS0tLS0tLSsuLS0tLS8vLTAtLS0tLS0tLS0tLS0tLS0tK//AABEIAOEA4QMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAADAAECBAUGB//EADwQAAICAQMCBQIFAwIEBQUAAAECAxEABBIhBTEGEyJBUWFxFCMyQoFSkaEVMyRiwfBDgrHh8QcWNFNy/8QAGgEAAgMBAQAAAAAAAAAAAAAAAQIAAwQFBv/EADIRAAICAQQBAgMHBAIDAAAAAAABAhEDBBIhMUETUSJhcQUygZGhsfBSwdHhFBUjQlP/2gAMAwEAAhEDEQA/APJII9xqwvDGzdcAn2B79v5w+g0UspIiiklKi2EcbSFR2shRwMB0vWiOVXI4BIb0q9KwKkgMCCwBJF+4GaR6tPE5iZo1G/8AMK6aGmBr1UEG4Ecge9jKmjoLKvBZ/wDtjUeV5u2m5Pkncs+0fvEZFlftmd0/QvM+yNdxqz7BR7sx/ao+c7vXQxkR6iWay6bi7aaFju/JVCrhaKhpgx23SqRe4jJxanRiZhJqkZRIrsjwQ+qQbLaR1UoxG5/0k8hueLYUXLM3E4rWeGdSr7EifUAqCrwRvNG1gXtcLzV1f/TMyCDcSLAIVjTWL291FDv37/Gdb4o68w8kQajzLBd7j0xp9q04VI7jPrcUSTwb71mWvUH8qV38s+Z+WtaeFCzEWzWqg+lf8uuFlEISkzKEePRwe/G3YvJp9Fe4YDFeDBxZB1gXuTMmQLY2NkGajETnIXjsOMSLhMmX73AlXHrJjGkPbJYuylYmyNZI4iMBqq0pDY2OcbCCbtDVj4scZAwXgWPjE4icBa2hYxGPiyE7GrHxYsIt0PixrxZKB6gBYCWCqLLMFUfJJoD+5y9rOoENsTy2WNVjV2gikL7BRbc6kkE3XPC7R7ZPp8uyQN6OFkrfuCklGFEp6geeK965HcG6d1HSgt+I0iEbfy/KDg7r/cWloLX0J+2MnZzskHBnWeEptVND541cQ8kOqQvpYWG2PYarikG6M3wBx8cXZ+namRWsaQtMnmx3oUaTjyVYRhgSo9Yo1Z+gqucbVdP2ecirGGtTpqcyMR/z+edqc92U9jx2wEHWIHJWaFY1LWjgzTeWOOGRpPWKVexB9I79sjHxW02iPiCJ9LO0JMLlQLYaOBRZ+PSf75S1EhmiDcAxHa4VVjXY5tXCqAL3WpNe6ZvajWdOjYI8P4g8F5oyaNiwFBmNjnkGjY75jw9RU+YFhgjDRSC/zro9goLsLuqu+3fi8V8GnG7SdGUBjhScLDHeXEgxXI6eLTSmUBGcZhmqIh75GSIHBuL3omlwzKGPWFmirIpzhs5uWEoumHg6VM8ZlSJ2QXbBbHHf7/xlRFz3DoXTFGjg2rZEKMg3FAWAv1EfJs0e99s808WaWKHVTRqrfr3ABlVRvUP8H+r6Zjwav1JyhXRQ8a4dnOlD8YJ++WCuOM2JjTw2uGByYFjO46B4NjeMPNbOyLIsKuI2CNe0m+eaPwMp+MPCo0oEkRYpYDhuSpIsG65HIH3P1zMtVjlPYnyWYltVS6OPyOElwWakZ8icHtJY+IY2Qsg+BiMQGPWPWGwtIYYsfGwB3SfSFWPWMTjqpPYYRfTcnyKsbC/h2+cWDci3/iv+lgry1o9YIt1xRzBtth1BI2m7VqtfcH598ps1Yla8Jkk1K4st/wCsJvVhpYQFVht28Ekqdx+vprm+GOW4OrII1X8PE3Hq3RDdfcnzLsgktxQoUOazBZecOmMynCuaNdusoxB/CwLSyLQQAEttpuACSNvv8ntlHVyBnLhVjs3tXhRx7ZXXg/fCg4rZfjTqkPHKR2y9BrAe/GZ/k/cYZIvnk4jSNmHV5sTpl3UTiuDzlcMwAYg017TRpq4NH3rL/QemGeUIFYqPVJtFnaO4H1PYf+2ek6npUPkhJIyUC/lI6KpTsoSJ1P6iSO7G74zLl1EcbUeyzLq8uR2uDzrXdLdAxdoxtfYw9ZbzKspW3uPf2zOhj52qCx+ACx/sM9HQfhtV5+pkCbmcgIAqRsxp/wA3sXNcsaNG/oOoR/VuPPC0Q3mMtkUPSvK+9/TM0tbKK6v+fQqc5TfxM5nwnPqI4jDqNLIURSLOyih9RRkci6qhXtxnGeL4m/EvIf0y+uMgGiK20PtX+Rns42PTB+T+5fUG5HPv2F/yfpWYvifoyamNlblgn5T16kfmgPkEUK/5freZcOoUcm9rsXs8WbIbsNNppA/lsjq9gbCjB7PYbSLzuPC3gFiF1GsU+WQSIRYfuNpkA5APPp7/AG7Z18maGOO6TK3KT4R1nReoiaFJVK7DHCFAQ7g9lZFar4Brn7m6zF/+pnUFEAhJtnddosE7VIbd8jtX+PnNf/QkMYjV5UAH5RjZoDGrFyF9NBhYPfvX9+B8QeEtTFIdofVBiNsiK0kjccbkFt2H2/8ATOVp443l3XXPBY7qjliuNwO2F1MLISrqyMO6spRh9wecBnbTsG5Lkiy/H9sQGTU4m+mMVqm20RrGvIlsV5KD6kfCHLYhZ7DHVfnBy6iuF4yfQdyUVc3Xy8hCFX9Rs/AyD6k9lFDK6thQcavczvUyfEOF+v5kdzfONhLxYSm37sk6XkBx3yYfHPOKWbU+UQIvLemhHdv4+uUmjI7HIrMffI1fQ2LLDHPdOJe1en28jtktM1cjk+2Q0+pJFdxkhiO+mbHkhu9TF5/QmWs884rxhmn0DS75lN0E/MPpL/p5A2jvZoV/8Yk5bVbKbs7bwb02NItzrGzCixEjF0Y3auqqaoMBz9698zfG/VisqRIBaFJJDtX1OOUU0BuVRXcWbztunK3lICWbgBiIjpva72hgR2A5v6jPHOs6wyTyP7NI5H2LGh/ah/GczTL1czk/AZPajpNDrDr3VNSBsj3vK0alSzMQNzV+mluqAFLZBrOtg6i0RWKOFpYLtp5JmLxoliSo1FvwtihzuXj3PN6vxBBqIfLWHy5SgESpCrIshJAIJJYBRdEAmj8jIaiA6HSny5NzMzF7vyxRETJsG5CRZ7kNf7aBOGUdzqq9l/cD9zsU65o3Eu13BiPllDEVkfZ6rRRyQObAF0Dx2uppPFGmebykLSngsViIQmj2Z62EBRyaHNc85Xh02obTeVKoEroN5UOLAV9u8qbLClJYEDmr4zn+neLI0G2XSAPuUTNG+wyckSs+4E7jd/f4ypY4yvara+ZOV2z0CCeOaISo7J+SC/mOqAqPV6XP0Y8gkfFHLMeqkT9Qr1cft2gj0kk/qN12/q96s+Z+M/FMcwbT6dFaLgGRkIsCipjUn0m91k/T4zpdH1V0g838cryNEqo2pJaNFNlW20gNqAT6WILVZrFenaipS4bJu5pco6Z9YTzVVwdxHABtbrt78/GA1U6xIzzFUAERbcTtViQto6m6tv8Asdudn6g6aaFTr4VkEiGaRliIkXa5UMA3INcV34PHJGH4qgEkDTpI8pZtzbZN0VBqD0G22EUq1WQQp4HJTHp05K35C5Oiz40H41UOlCyKhkcVy7L6FNNVAAsLUkH03WYnh3pqtFqAyAyqSgDlU2MVIFlu3qu//wCMoeH+vSaViycqw9aE+luOD9D9c3/BTMw1EhsbpUJIvud5PABP7h7Hvm+anixOK6VV79kS5VnJ6npkqMVMbGhdqpdSP6lYCiPrlIms9WnisgqZuGU2h5ohL8yNgLHsbWx98868SQ7NRICBywbgUPUAeMv0+o9V00FraZt41YrxZrGpPtApiRlcDLpGVqo4yMefHTuyYAwgjBwYbJq2RlmJwfaJ/h8WLefnGxeTRsw/0gsV4+w5LbWMYkrIqTknr3H85KCiaOPJGR6T7H/GBlnpt493ZNFoVksiMkMQtqlwE08DuSEVmIBJCgkgDueM7DwX019jy1qF3OqKYItzkA8srMKAsgWePSfjMHw31T8NL5m0sCpRwG2naSpJHsSK4B4zvPB3iDzn1Me4xIwDRiPas20qEfa1d+F59t3BHti1U501XHHP4gS8+TpBGwdQWNdtjMhLcEncxBdj27MB7m758Q1qDzHC9hI4H2DED/Ge3wyKoBWlX8sE7xJ2JXaZNwBI7HvzwAavPMuudIEWqlXii5dK7bX9Qr6CyP8AynMn2fKpNGrDp/XyKBa8LyaKOEmXiba+8vGWBVtybYytkWrc9u/fiswPEUqnUPscyINqxsS59IUCgX9RA55Pfv75oHSgijmZqulsOV5GdGOHbNzvs3av7JyQV4+UDi6rMq7VlkVd26lldRuraTQPegB/GVGkyLxsO4yFH4y1RiujkvFNcNFjTT7XV6DbXVtrDcrbSDTD3BqjnY+ItbpNTpkqRUmQKyqsUioGkP5iixx7E89wCO5zhxfxhUjY+xyvJiUmpXVBjim+EjsOuQQ/gogXJMajy6kuy6uKpFZW9cZP6zQkPIFDKXgzVokhE5URFJBZWyCwWxYBO07QCK/65qdL6ZG+gCPLEjt5oQPIVK7WLiwGoeog2RdBhZsAcj53FVmfHFSjKD9zVh08W3v4on1N1eVmRFiUkBVQUtKAt17XV/znc+DdH5enW19Ushde1kcBa9Sn9gPB/d2zjeh9ObUTKg7d5D/SgPqP35ofUj756iqheAvZKCdht4pQrptYdvUpsWPnKdZkSisa/lAyKKpRKOsi3twEk9fYyvDJxttkceqxXbubonPPfGP/AOSQf6Er7c+/989BlCtIIy0T7QHkilUM4r9MkZr2Jbmvjt7+deJ5g+pkIsU20g/1KKevpu3f3yaBPd+BS1b4MrbjbMmoyedO2aFBMARgZU98vADBSJjKRVlwXEojCKcZhWPZ9sc5aVOiVYsjTfP+cWQv3fJhjkTjBslihfQMGjeX9TLYH8ZQbDpJxX9skizS5ajKF9j5JcGckpwDOPBpdH0XnTJFZG5gCQC20e5oZ2/hbw+sWodHJkdoWCLWxGTzF3Evd8BUJrtuA5N1w/SZ5EkUwsVdvQNvc7uNte4Pxnb6Xosiah9XLKAUmQybVCiWNlUFVUHttJ9IHYfJGc/VN3W6lQsaOv0pDJSFWCHyvywYolKigkR77R6VLD5au1DM6/0g6iOwQdRDd0Au9T7EEkqDVruPtz3zeH5yxTQAybkUcuohhiIDM9Du54WrPb2AyAAkVHhs7gWjNhQ4ajfPALbh6iOFus5Nyxy3IuxZHFprtHmGw+4I7gggg2O4I9j9MDKM73qPR01R3IwjmP6r4WWiF3Ad9tmg1c17iq5PqXSZYj+YhX4PdT9mHGdrBq4ZFXT9j0+m+0MeWNSdS9v8GJJIPcA4Ftn9OS1Ao5VY98vsXNlphd6fAyEuqrtxlZicaOBmNAEn2AFk/YDBZgy6xxVIeScnDdN6fJM4jjUsx9h7D5J7Acjk50PRvBMslNKRCpJ70WPbir9N3788ds7Pp3T4oE2QL7sCTYeRkDB13H/xVAsDgEE1QN5jzayMeI8v9DDkzyl2V+i9GXTII1PrcXI4pWagb2bhtYr/APrP1Pe80JECqVRVNBmWMMYwxHNorH0Mb5A4vCKpClRbkjcSBTThQCJCnYOKUEqOa7dqzIoxP+azLLpBtlhclopYJVG1ge3A9R57bub9uXbm3Jv6/Mobr6lfXa3ytNJKxlK8mOKbaskW47RGpA7eod7Ne5zyyj3Jsk2Se5Puc9I1HVItTJLHKYRp41IWRnoybqFiyLrkiq/Td81nA9WhRJWWJ96cURzXyL96+c6uj4tNU+/wGjUXyVVXEVwyDIvm+jS4UgeRY47HBk4UiicqBv3xryLnnHyxHOT+NkrxY2LIXWFlgIwQbNVkByhrINvIyuEr4Zp1ekcFvgBOWtPF6b9yaH8ZSVs1NF+gf+Y/5rGkUaCMZ5X9P8AmTIhcM4wLYiNuWKRZ0kpRgynaym1PwfnnO16H1F5JjNqAFh2hpfy0UMy7dpBbm72Hj+kcds4/o+lMsqx3VnueQKBN1/Gd+wLkaQi2Y71JGwSE1vAa+FLNu4sChd9sxalxuvP7Iy7aVmx0PqIhLRtEkekPmEE7G3imfZ6OGXYvaiaHN3Wb2ohO7zYuRKdzksI49Pp0UkbR/USy8+9sey1nGr1KhD0+QErbBmal5ZpEsizaj9XcHgfbNzT6z8HL5IPmwBvVISfQBEjbRuamAtjxxRrkg5hnDj+fn/OwSjz8Pf7mggSQg8qSqSHinQEKE3KbulDVfY+2OEnHpULKCFAU+kgudoWyeyqpZiSSd38ZZjXT6lrDhWM6vKB+txB6QhH7VDKvHwT7teROl1EbIGp/MnnJIv8AKiG4pZH7gCoI4/mrOf0pLlcr9RN66fDMLUdM0snL6bb6kBKqy/7jlYySlcmr+xr2ynF4Z0DEcOL8skbn/e7IOe/LAfxzmtoOu+ZDDKQytNKixqPdgzD0k16QEZrNcKfkZZHUlVVIJ5nSGIhbLNG7MAvIva26/jY3sCcCnljxbLt8kuH+py/+k6BRu8ovUcjmy5BEbiN/SWq7I4+p+maqKEDJBCim5AtDarOhBX9IHBH9to75ak1EW5+PSmoMTsR6TJIysy+/O91v6kZT6l1OQfjFWJjJp1DqGU07FSS1e6gciuSARwcDeSbrn8WRy92WGh3cu25CSApG0GORQdjBTw6Fb3d6Fe5OLXapYg7ld5VoRqQv6trFVEtAc0p5PwvfjBT6SSZ3jJKwT6KPay/qjku2Ndr9amhxQrGn10MKmYD8RN6dNMImDNIYwd5ZCeStcnuAR7ZFjvv8l/PqDd7BIdA7MGlcDyp2fSyK4XdHID+XKtVQBAJ+gIPfMfU9dj1t6eDeAwdZTt4KkUSKNkfJsWDxkOpo2q07+cyxeUWkjjorywJhTd+kjy2KEgHn4qs89l1G1n8tjt3MFb9JZQeCR7WKzbhwKafPK/Jfzstx41K7fJo9e6f5Eir+1wSo3biCO47DjkUfv8ZmNGMhqdQ0jb3Yuxq2ZixNduTi3508aailJ2zfjlxUuRiMjtxMciDlqYkmrIyLldzXOHfKmob2xl2YdTJRTYHJjIZMY5yoPkfFix8hduNN5awM7hhlORycheVqB0Muvu1XAI8Zq9Mk9LfT/rmUcsaZ/bLJGDRZfTzX9S874C8TYwypnRySbLmg1DRuHQ7WF0R7WCD/AIJzsui6bfD+JaVpJB5iRReo7S/p3WhsC2X2AAP2OcXoyNy7gSu4bgDRIvkA+xzttbDGIPyypVJVuNZfM3BmI/v6gfirzHqKtL3KtrNLw7qomgeaUATqzfhyoWEl2IYgOBS77o37BiPejI8mjhlJB2m1j9jItlS6tyF5dCe5s9vfIdc0qyCNNKlkLG20OPUW3C1XgKTuBv32gAcYLq3V1do9HqELIiIg9RjpyyiypF0DHQNg0xPuMzcS669hlSXw+e0/kamnOmOlDQt5Gol3Bj5hAO4SKfX3c2N3pO6yCfbNHWdY1OmEKuolPlbqWQqzKSBvII/aSgPH7vbOeHS49TqFSFtoUBUjsuyIablSAFIvnv8AUX3P1aKZNR5AJkVQqSKG8xCaW1exx6DEeQACxr3OLtUv9/5JGEZNK+7dP2+prweIo1eCNobI3raoCI3VU/2kPtTN6r7A/Wrh8RwJ5YWK/wA1vJVYz6WLSo7gkAFvU5I5/wBz63nK6rqDyT0F3oqICSvDR7mde5pAA4F8G1/jGl6u76naTvB8kSOBtLohMiMpU8IEe/rbX3oKsb4r2vsK026uPd9m91LrcBeXTrHYcvKrCtsjkcvwbADREdr9PHfH1PWpDqBtgKqV2tJIdhkcpviUgcqPVyDzya7C8LXdZebUBTGrMDCrm3QfkkuTGO6g/PJYBeOAMAomk1pJDSbU9Vny/wARaWLBraShUVyV2+xOCWPy/byD0dqVquPcuxTzBzHLqVpGZE2qocsoV3ZhQDen02OLf2INZmh10cErwwqCrxsXMqbo08yikjW1gbSgK++8c2Kyvoelf8TbzKGMk4jsBSnlh6dhIQRTAcU3I54zR0USrqJhBH+IdTqDK7HdHf7EYsL22na/fucLUVa+X0RKX1MXonUkTUuZgwDSbVDsKi2ttQyCu6KK4oj5zF8W6uKSfdEDYG2VuArsOzIATwee/wBMt9YmDyuP6JJVHzRkZuTZ7XQHsOMxtRCM348a3LJ8jc9NuxxmuOCouEUYgMKM0pAhAAwxLhmGCPGSqA40QkOUGNnLGpfAouPH3OTrJ7pbUMUxLhLyLLjmZwrkbHxrxZBdxPBMcTvfbCRx5Ogt7uEQVMlAfUMIRgFNH7HB2NFbJJl44guI98cZWzr0EhGdp4QhK/8AENRRL9Pc/cgcgdvvfxecSHzZ6R1ySEbVqt24gqDZqvfmu39sz54ycKiPu+FxR2OiZjqBqoeEIkNqpcJ5jlUUr3BsrweBtJ7DIdG18Oo86adCkkYdoJEd7VpN7epmJUEbSQaABPFGsfQPPD06VyjbJnLrTUvJViPQwZOA1V2r75GKKB4AVqE6hmaYM1ICCaZbsttIPpFACQ9rzE12vwMqV8fsXPDnRWaRmhZXankpSUB3FgyByOCLYduxUgi7EOlaqVprc+YBJvDOAyWwqNxyRyHXhSeGwOlWeCGQoWUuSlqStOAV2AGi5YM1EAjge5FWei+I2j087NTboggN0zDkUvtwZFN1wDZvgYXzfnwaZX8Ti1JJJLwwidYOomebYoBYum4WN+3y4128EgruGzn1Ox+2f03qSyagOIxy7sLAO5SGCxuAKWP1LwP0/JGafQfEflxTlogQY671xTAn4aS2BJoX3NVmV0zUxkSF4lIEdy3ZVkAXdI9US4Kq3HcseBglFcuvkRY9u64dJLv3D6frt6tnRFAMqsNqldu1VFAmtsalWNHjknj2LquuT6nWb1VgEL2qAoXPlhWUbv0k7TV13JPfKHRtWjMWMQYiOV5QaAnut++72ekMaBokm++B0vVN2opKCmbVOGCgMd6sse2+VpaA/d832wyh2kvAfR5pQ5UfP7j9I0jNrN0j0fNNFeSeXQMtk0FZebujVg84/V9ZHo9RL5FuzqTbEkIzUSRVBiGDfT+RktPLAdQ7yufVIBpxs2rTcmQsaCjcW57833HGL4tkhM1wuXats9L6AVHGxrJbjj+MkVvyJSXFfgGNOUb6qv5/co9a6gJpjKkflbh6wGL7n9257fb6ZnOxOEK4/lZ0IxSVI1rG0tq6KxGFUYRosgeMdC+m4vkixyrJLi1EuVGkxkrOfqdSo8ITCzzliIJ73lcnJCvnHMGKa3NtJ/UtNpPdTeVyK4OSjauzj/Iy2pD+lxR9iOxwXRuWOGVfDw/zX+ihtGLNH/TPrj5NyF/6zJ/SZqLWSw6R1kJcG62V/wDHUY8kVOBmXm8ImScWMPTMs48B9MNwv++TdayropKNZoTL74rR1dO1kxX5RWbNnwtoUml8t95tHKbNoNqL5v2oHMZjk4JSpsGj/bK5puLSK5umd91DqTQmLTld0SetNwLellr037jc3PH6gO2anifRQkrHpht2RqVU7rPqIcqtcLQLenuRwDxmJ4f0EsciTTraIo4vf6GUn2PpUe5/jLkccmr1CSaN1Y+Y+1dzAqqsHH66JADcjtVAZzqW5JPrz8wJqEk7+djeJdNqNKsSuNpUJub0t25iZDZ2gEsN3BJT6ZZ1XX/+ChEkSHcxKg0zPtY7wwZTURBTt33cVV5R6v1OV9WUmViG2RruiHnBLJBD0WLI5YirG5PvhOudTiaVYvJUyJtjJUGg36fMLKfzHC1Q28GvisNXXHzDbkluVtu+Cw3U0TTKHjX80kqdnmNFyfMRA1AIUKgC7p/esrwaqERPIEKLvAQFuUlET7CzjmQEGSlr2/nH651aAssRhBaMqJNpCmVlZVVnkHH+2pFBT/uDkVxHqfkpDEkgYMyp5o4j3RtUlpGP3hkUEtQ5PPNYtKkqfLLEls+6+X7+P7huiTwgMVjIT0ICzBTHICzCQkWWW6paIGwX3OZGgjC6tFQGlaNkAF7mCBwUDXalhahj2Is98u63VxxQIrIYyzIxXdR2M5YjatetV2gMw+Pk5gabrM0asFI3OF3OVDuKH7WYGu//AKfGWY4ylua88cl+Hc3OUb6rllnxQHErB1pd1o1cMzKofnsDafpHav5OKEy/1vrMuqKhvRGtbIlYlA3NsAffn/GVIxmnDGSglLs06aMttSVDoMdslWQc5abGqQN2ynPJk9TOBmZLLePFWcjWauMOBTPgCcdzhI0y1cHAd5JDbLx/Kyd415C70oEDHlrQSeoKex/wfnAYkNEH65Ow4n6eRSidD+F/5sWVfxeLK9rPUetg9itKayq7YSd8CMMEcPUZLlSJKMkciDkgcLMjRXJps1NNLYzN1C++PppqORq0NpM/o5KfTNF0wJGWY3DDISJiNHVy4lONo09L12ZY/JDKV2lQCgJFkmwfnk1edF4P0mpgDahN2woAwTca3AOjMKqu1nkgMexOct0vR722qV3VfqYL8cC/fntnU6vXTabS+SptGJWbi1puTZ9v2jvRBH8Y8u2L2rtmaeHbHl8/2A9H6iTvkaNSYt8rmlUfmMocMD9TdDk9ucPoeoQPqJJVjJCLJI8lJCrgbgqhWDCLhkF7hYQiuayfVOqw+TGJoQpcM5pTvYMPWqkMuwHiibqxQPOVZQI9LueAxhr2K1sUViqupKhSQy/uPbdXfM7p+O+CpvnhEG6jDJqN0cbFi6hXCgD0soXbDzfC0DY4btYGWOs66ODUWYFP5foUOVCsHanB23fJJXt2++c70brbaaQvGBRNepQ7Bd18E9mr3GWfEXiJtUdvlqiLIWj43OoIorv+Ls0AP8Za8L3pVxXuadtuKSf5/wAoN4j8QnUBY1UBBtZywDP5ndtj91S/bMbIouFVc0wxxhHbE34cW1ceRKuErHUYmcDvjm1RSXIxOUtVqQMhrNd7DMuSS8eMbORrvtGMPhh2SkkLHHWHEo9sJN2A/vlnyRx4x3JznyV1XnC4lGMcIYR2oWKsbJVkJVjYxyVY8JAPOEijboaj/wBnFl38Qnx/jFibn7Gz0Mf/ANCtORfGRrGwsMJb7ZOkU08kuEDVSe2FMDDmsshwvA75bhHFtiOZvxaGE+G+f2Mh+QftlQZfmrca7ZQcUcsicXUR2SosaeejmrG4YcZghsPFOQbGBxNOk1vp/DLo0NxVr+CCD8Eds2Oh9UkbUKGZmEjL5luRe3s3HuKvMaHWg8EZrdJ14gYuIlkscE914I4+O/8AjM+WFxfHJvcI5Fvxu/kXPF/UlkkZdvqWSv8AbVQABRII5bcNh5ArYPnLK+J4zB5EkUkoaGmdpmLeZtC2t9lrd6ft8Zg28jGSQ2T2v4HAH9smyDK/Qi4pS8D4dG5Qt8FKKM++WEhw4AGM0wGXHQx4IQXLGVMc0Mqy64DKM2uvthUWyrNrsOJdmhPqgvvmXqdYTld5CcSqPc5bGCXZw9T9o5Mz2x4REtk4lvn2HfH2r8nHu+BwMYxxjTt8h4aA3H+Bgibxsa8lGpz4SJHI4scLkK276GyQxwuSvBZYoPyNtxUMfHrAOooa8bHrFksamShjvLEr0KGKNaGVy1nE7ZpX/ihS7YaFgPU38D5wU2oZu5oewyE5N/QcfzjYyXkpnmdbF0v1EuDlGTvByHG8nOyysDty1FHkYovc4VjkbExw8sFNXtj6bWsuRlOA3D4w1wH1ZY57oOjX/wBVHuMY9TGZRP0x1XF2I1f9nqH5/Qvv1I+2VJdUT75NI8jIgOFJFWXUZ8i+KQNDffD/AIOxatu/wcq0QctQsQdy/wAjC/kLp1CTqav9yu0RyO05rThWXd/fKe3ApWWZtGoPhgUi+cLk9uPtyWCMNqpAgMkFyROSCHBZbHFZCsfCiH5xCLBuRoWKS8AsfbhvKwMjVkTskobFchicG8mQZsSpeOkYp5nJ7YDeZiw3kfTHw2gejm9y3q2wMQyU5s447ZR4OrJ7sjZOejH9QwJyhI5y9G3/AL5PVaKhuXse2NF+GV6jTzzR3Q8dmZvJ9sJHH85IgjHBx2c30XF8kicGTjnI5EgshKMr5al7ZXrGRmyLkdRhUGQUYVBgYYR5JscHk3wYOBF2VbXQzDHhJB4x6wixn4w2DFCTlaHLjIl8kynBgYEkaZWginGu8icPEKF4HwWQW50SVAos4NtR8YKWSzkN4yKN9iT1NPbDhFhSTlqJcoLLh11IrFlFmnBnx9tlmU8ZmvycI8hb7YypjRVFGoyvO6j0RSPLsUQAvBJAcNIaFYspF+nwqCtohuxYO8WDaNvJHvkjixYGMvI2av8A4K4sWQ26P/3+hk6jvgBj4ssXRydR95jnGxYshkZGXK+LFjR6M8+ya4VMWLIx8faHkwGLFkQ+p+8FTLqYsWJM26LoHNgB74sWRdEz/eEcK/6cWLJLwSHUvoVJO2BxYstRycnYVcjixZCPosJhExYsRnSwdIvx9sry98WLKfJ1cv3EVsWLFlpzD//Z',
    },
    {
      name: 'Diamond Ring',
      description: 'Brilliant cut solitaire diamond ring.',
      price: '₹25,499',
      image: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQyHChEHID4LwnA08ItRSw5oPNS8v4tcbShCUbuSUN-qgDREvVcQn41yxPpj0JnHXClGUn_FXNpDeSpv6cpxpEt_yhyOrE1fA4ilMa-__dLay7rFL8eHEGVd0o',
    },
    {
      name: 'Silver Bracelet',
      description: 'Trendy 925 silver bracelet for daily wear.',
      price: '₹4,799',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXvf3jJ_waT3mO8AvAw3RtrBWE1wu9X94FiQ&s',
    },
  ];

  return (
    <div style={containerStyle}>
      <header style={headerStyle}>
        <h1>Jewelry Collection</h1>
        <p>Explore our latest handcrafted pieces</p>
      </header>

      <main>
        <div style={cardContainerStyle}>
          {jewelryItems.map((item, index) => (
            <div key={index} style={cardStyle}>
              <img src={item.image} alt={item.name} style={imageStyle} />
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <div style={priceStyle}>{item.price}</div>
            </div>
          ))}
        </div>
      </main>
      <br/>
<a href="/" style={buttonStyle}>Go Back Home</a>
      <footer style={footerStyle}>
        <p>&copy; {new Date().getFullYear()} JewelryStore. All rights reserved.</p>
      </footer>
    </div>
  );
}
