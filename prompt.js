const icon = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKgAAACnCAYAAACFHRdhAAAAAXNSR0IArs4c6QAADb1JREFUeF7tnfvLLVUZx581M3tmbz1dSMsLahxL5Gh4Ukv8QUHKUtG0gwjmQUhNg4IyJSj/h0P2Q0HmJRDDEvGSoqLlD/pDHNE6oqJ49IDK8U5Zx97Ze/bMxHfOO69773df5j5rZr4L9g/nvHN51vf5sGZdnvUsddNgEErHywdhKO8EgbwbBPJeEMj7YSgHwmpk2aKUHK6UfMEw5Mj1H/7NclAB1UVA9weBvBEE8mYQyFtBIGsVwZgUuoFScoxhyLGGIccZhhxtGElvbd11nQB0KCJ7fV9e833ZFwTysWZArqLqUKVkq2HI8aYpJxiGOB1qYVsL6EhEXvZ9ecX35VXfX8VAo/5+gmnKiaYp20xTeo2yPL2xrQP0dd+XF3xfXvR9qaYXmV70ou5AT/Vk05SvmGbUuraxtAJQNwzln74ve8Zj+bBhn++ioDpMKdluWbLdNAV92LaURgOK0fez47H8YzyWoC0eyVkPDKdOtSw53bKi2YGml0YCiimh3eNx9ClnWawAPv1nWFY0fdXU0ihAMUf5d4KZmjWAeqZlRXOtTSuNABTTQk+Px9HnnCW7Avjsn2VZgmmrphTtAUWL+ZTnidcURTW3E9NSZ/d6UYvahKItoJguenI8jpYfWYpXAP3ScyxL++kp7QDFBPvfPE+e4+e8eCrnPPE0y5Jv9nraTvhrBShWfZ7wPPmoo3OZlRA55yWfUUrO7fWi1SndijaAPu558gxbzVr5+Lplybd6ei2e1g4o5jQf8Tx5m33NWuGMX36UYcgFvZ42c6e1ArrH9+XhEXqdLLopcKFtR8umdZfaAEVfE6tBLPoqgFUo9E3rLJUDOgxDedDzWhcCV6cTy3w3Qvsutm1xynzJkmdXCiiCO+4fjaJtFSzNUQBLpN+17VqCTyoDFFss7huNGhfN3hyMyrUUy6M7bDvaglJlqQRQRLTfOxoxJK5Kz5bwLqB5qW0LPvtVldIBfcn3o886S3sUwOf+pIogLRVQbLt4gHC2h8yJmlxi29F2k7JLaYCy5SzbdfU/v4qWtBRA0ee8hy1n/QRVYMFlJfdJCwcUo/W7hsPW76iswPeNeAUGTlc4Tmmj+0IBxTwn4GxaYoRGkKCxkZiC2uk4pcyTFgYosnfcORxyEl5jkMo0DZP5V2LFqeDtJIUBij5n2zJ4lOnQNj4b86PokxZZCgGUgR9FuqTZzyo6wCQ3oAyZazZQZVhfZKheLkARbHz7EL1PFiowrcDVjlNI0HMuQO8YDhkJTzLnKoDI/Kuc/EF6mQHlHiKSuUqBIvY4ZQIUuy8RncRCBVYpgOinPLtFUwMKLH/vutwavMoz/HukALY0X9vvS9bJp9SAPsqkCkQvpQJIDnF+xr1NqQBFjvc/8dOe0j28HApcbtuZ0uykAvS24ZC5kshbJgWOMAy5JsOoPjGgyDKHnEksVCCrAt/IkFUvEaCITvqt6zIFYlbP8L5IAeyw/1G/nyo/aSJAH/M8Jo8lZIUogCS656UYMK0EFHvYb+VyZiHO4UMOKvADx0mcjnwloA+ORjysgGQVqgBy5iNbSZKyFFAGgySRkNdkUSBpMMlSQNl6ZpGe9yRRIGkruhBQ7C+6xXWTvIvXUIFMClzX76/cx7QQUI7cM2nOm1IokGREPxdQnH15s+syl1IKsXlpegWwZfn6fl/6SzbazQWUq0bpxeYd2RRYtbo0F9DfuW5nTw3OJjPvyqoADrxFX3RR2QQoDtC6mxFLWfXmfRkUWBbptAlQTi1lUJi35FJg2ZTTFKCIVdq1tsbBUS65eXNaBTBYumEwmBt1PwXo874vD/HznlZfXl+AAhfZtpwyJ9/oFKBMX1OA0nxEJgUWpc3ZABTpF/B5Z6ECdSlw42Cw6bibDUCZrrsut/C9sQLz0opvAMrRO0GpW4F5o/kNQH/tukw8W7eHOv7+Q5SKlj4nSwTo/iCQPzBqvuN46FH97zuOHD1xWFgEKNfe9XAOrRCZXZuPAOX0EtHQRYHZ6aYI0F+5rqyFoS420o4OKzBQSn420Q9V1/X7ISPnO0yEhlWfjLRXF9t2iCkmFiqgiwLY8YkpJxR1hmWFu8djXWyjHVRAJg9iUFsNI9wXBJSFCmijwFbDkO+tJxpTW5QKD3CApI1zaIjIFqXkJ+sDJSXCYzUJhX4K3LC+mY6A6ucbWiQi8YoSASUOWioQn0VPQLV0D42KlzwJKFnQUoH4jCUCqqV7aNQ205Qdti0ElCxoqcAXDUN2Og4B1dI7NCrKwIxMzGxBCYOWCuCEuh/3+wRUS+/QKInD7tiCEgYtFcCRNT8fDNiCaukdGiVIh/MLAkoSdFbgJgKqs3toGwElA9oqgMHRL9mCauufzhvGQVLnEdBbAE4z6e2fzlvHifrOI6C3AFzq1Ns/nbeOwSKdR0BvARhup7d/Om8dA5Y7j4DeAnDLh97+6bx13DTXeQT0FoDbjvX2T+etQwpGTNYz9U3nUdBPgKnUN0wepp+Dum7RVPIwpl/sOg761X8q/eJ3bDv8CxPY6uelDls0lcCWKcA7TIKmVZ9KAc5DFDT1UkfN2nSIAo+h6SgJmlZ77jE0PMhLU2910Ky5B3m9HQRyB49C7CAO+lX5KseRo2aPQoSZPExWP2d1zaJDlZKfzjtMFkLwOO6u4aBffZcex/2i78sDnA/Vz2sdsugS25aT1w/wiqu9cV78MAxll+t2SA5WVTcFbuz3xVHYEf9J2QAU//Xn0Uj2+r5udtOeDigwO720qQXFfzzv+/IQP/MdwEG/Kl5k23LKzOcdVk61oDhSdtfaGk/20s9/rbYImexuHAwE2URmyxSgHM23mgNtKzdv9D73E4//fN335W5+5rV1ZhsNu9y25fg5n/dNn/i48re4rnzAA2bbyIJ2dTpMKfnhzOT8wlF8/AeuzWvnx9YaNLv2vrIPigvcMJSbXVd4inxrudCiYpjxvH59c9wigzYNkuILH/M8eXY81qIiNKKdCnzNsuTbvXlj90/quxBQ9EHRF2WhAmUpMBk5n7oF5ZRTWW7hc6HAsqmllYOk+IJ3gkBuZ5woiSpBgasdR46ciPvM1IKyFS3BM3xk4tYTUi3sg8Y6vhcEcitbUWJVoAI4JBYZlJOUlYDiIRzRJ5GS1yRR4HTLkvNWjNwT90HjCz8OQ/mN6wonnZK4gNcsUsASiU4wxtaOpCVRC4qHcXUpqaS8bpECq1aN5t2XGFDcfNtwKO8GXF8igukVOMIw5BrHSX1jKkAZ6ZRaX96wrsCyiKVlIqUCFA961PPkOS6BErwUCpxmWXJ+ioFR6kHS5A2eSLQE+hHD8VK4qLuX4sS4a/t9sTNKkLoFxXte8X25l0HNGSXv1m2X2racuCAYOYkSmQDFgx/3PHmGn/okGnf2mvisozwCZAYUL0U+J+R1YqECswogvxLyLOUtuQBlMEle+dt7f9JgkFUK5AIUD9/j+/Iw+6OrdO7U3y+0bdmeo9+ZaxQ/T+knPE92sz/aKQgXVXbyAIQiBMndgsZG3DMayatMm1OETxr7jEXpa/JUqDBAhyJy53AoCM9j6Z4CCJ+70nEk/7BoWrvCAMVjsY/pruFQEP3E0h0FEJ2003Hk8BRRSknVKRRQvPSNIJA/DofcspzUAw2/DmHHVziOHJcwADltdQsHFAagL4o+KUv7FbjMtgV9z7JKKYDC2Jd8X+4npGX5TYvnxme6l2lMaYDCaKYVL9N19T57XrruMiwqFVC2pGW4rP5nVtFyxrUsHdC4T4roJ05A1Q9XHgswIEJ0Upl9zln7KgE0Ht3fNxpxCioPITXei6mkHbZd2mh9UdUqAxQGYJ4UAydO5tdIWoZXYxIen/Uy5jlXmVMpoDAGK044NIzLoqtco8ff8TnH+e1FrxAlrV3lgMaGMcAkqYvqu67owI8sNakNUBjLUL0sLqvmniJD5vJYXCugMBxBz494HiPz83ixwHsRCX9Br5co81yBr134qNoBjS3jHqcq3L38HUXsISq6FtoAiophtyj6ptzSXLSblz8PW4PP7fVy7b4sy2KtAEUlse/+r0wOUZa/Nz0XSRWQMynrvvWyDdUO0LjCSLPz5HjMXFAlEYDsxudY1sIDtEp6berHagtoXBNk1XvK86KWlSW/AjhT4+xeT860kAxR/6I9oJAQEfpPj8c8FicnT0gee5ZlpcrPmfOVuW9vBKBxLbFEihb1BW7OS+V4nKiBFjNp2u1UDy/54kYBGmuBuVNscyaoy+kAmFgNSnKaRsmcZX58IwGNa4vgE5yGh3SQ3KZ3UBWExJ1qWYLPeR3BHZlJXHBjowGN67QWhtGy6Z7xWD7s6I5SnBq83bLkq6Yp/RJ2VxYNXtLntQLQycpiegqffuyJanuANFrLk0wzOndo0XnrSUHQ9brWARoLjT2lL/t+tDrVttA+hMAh5+Y205TlR7Hqil1yu1oL6KQEwzCUvUEgr/m+7AuCxkX1I5p9q2HIl0xTvmyatcVmJsequCs7AeisXPuDIEow8WYQyFtBIOjD6lQGSskxhiHHGka0xeLokpIi6FTnRbZ0EtBZMTAbgKkr/N7HLwzlQEXQblFKPo+fYUTTQfi1YfRdFPwEdIGSaFX/FYby7zCU/4Sh/Hcd2v+Foaxh60oYCvq54zAUX2RjQIaBC/JsWEpFARiOUjIQkUOUEsD4KaXk00rJZ5WSzynVqhF3UVBOPuf/+hrvkWVuy34AAAAASUVORK5CYII";

class tset {

  constructor() {}

  getInfo() {
    return {
      id: 'tset',
      name: 'test',

      color1: '#2dc4c4',
      color2: '#2dc4b3',
      color3: '#29a395',

      menuIconURI: icon,

      blocks: [
        {
          opcode: 'prompt',

          blockType: Scratch.BlockType.BOOLEAN,

          text: 'prompt [A] ,  [B]?',
          arguments: {
            A: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'hi'
            },
            B: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: ''
            }
          }
        },
      
  prompt({A, B}){
    return window.prompt(A, B);
  }
