document.addEventListener("DOMContentLoaded", () => {
  const currentPath = window.location.pathname.split("/").pop();
  const navLinks = document.querySelectorAll(".top-nav nav a");

  navLinks.forEach((link) => {
    const href = link.getAttribute("href");
    if (
      (currentPath === "" && href === "index.html") ||
      href.includes(currentPath)
    ) {
      link.style.color = "#523d35";
      link.style.fontWeight = "600";
    }
  });

  const books = [
    {
      id: "beautiful-outlaw",
      title: "Beautiful Outlaw",
      author: "John Eldredge",
      image: "books-authors/beautiful-outlaw-book.jpg",
      authorImage: "books-authors/beautiful-outlaw-author.webp",
      genre: "literary",
      rating: "★★★★☆",
      tagline: "A reflective and faith-centered read that feels intimate and personal.",
      review: "This book feels very personal and conversational. What stood out most to me was how it tried to reframe faith and spirituality in a way that felt less distant and more human. It is the kind of book that makes you pause and reflect as you go.",
      quote: "Grace is not opposed to effort, it is opposed to earning.",
      themes: "Faith, identity, grace, intimacy, personal reflection.",
      recommend: "Great for readers who enjoy reflective nonfiction, spiritual themes, and books that feel thoughtful rather than rushed.",
      authorBio: "John Eldredge is a Christian author known for writing about faith, identity, and spiritual life in a personal and accessible way."
    },
    {
      id: "before-i-let-go",
      title: "Before I Let Go",
      author: "Kennedy Ryan",
      image: "books-authors/before-i-let-go-book.jpg",
      authorImage: "books-authors/before-i-let-go-author.jpg",
      genre: "romance",
      rating: "★★★★★",
      tagline: "Emotional, layered, and full of love, grief, and healing.",
      review: "This is the kind of romance that feels very grounded in real life. What I liked most was that it did not just focus on love in a surface-level way, but also on healing, family, and emotional complexity. The characters felt mature, flawed, and believable.",
      quote: "Love is not always enough, but sometimes it is where healing begins.",
      themes: "Love, grief, second chances, family, emotional growth.",
      recommend: "A strong pick for readers who want romance with depth and emotional realism.",
      authorBio: "Kennedy Ryan is a contemporary romance author known for emotionally rich stories that explore love, healing, and complex relationships."
    },
    {
      id: "hxh20",
      title: "Hunter x Hunter 20",
      author: "Yoshihiro Togashi",
      image: "books-authors/hxh20-book.jpg",
      authorImage: "books-authors/hxh-author.jpg",
      genre: "manga",
      rating: "★★★★☆",
      tagline: "Fast-paced and intense, with strong tension and momentum.",
      review: "This volume keeps the energy moving and gives that immersive feeling that makes manga so easy to keep reading. I liked the pacing and the tension between characters. It is one of those volumes that makes you want to immediately go to the next one.",
      quote: "Power means nothing without strategy.",
      themes: "Strategy, action, power, loyalty, conflict.",
      recommend: "Best for readers who enjoy action-heavy manga with strong arcs and world-building.",
      authorBio: "Yoshihiro Togashi is a Japanese manga artist best known for Yu Yu Hakusho and Hunter x Hunter."
    },
    {
      id: "hxh19",
      title: "Hunter x Hunter 19",
      author: "Yoshihiro Togashi",
      image: "books-authors/hxh19-book.jpg",
      authorImage: "books-authors/hxh-author.jpg",
      genre: "manga",
      rating: "★★★★☆",
      tagline: "A strong continuation that builds suspense and keeps the story sharp.",
      review: "This volume felt like a solid bridge in the larger story. I liked how it balanced action with tension-building. It keeps you invested without feeling repetitive, which is something I really appreciate in long series.",
      quote: "Sometimes the quietest moments build the biggest turns.",
      themes: "Conflict, suspense, growth, rivalry, momentum.",
      recommend: "Good for readers who like serialized storytelling and strong progression across volumes.",
      authorBio: "Yoshihiro Togashi is a Japanese manga artist best known for Yu Yu Hakusho and Hunter x Hunter."
    },
    {
      id: "his-only-wife",
      title: "His Only Wife",
      author: "Peace Adzo Medie",
      image: "books-authors/his-only-wife-book.jpeg",
      authorImage: "books-authors/his-only-wife-author.webp",
      genre: "literary",
      rating: "★★★★☆",
      tagline: "Sharp, quiet, and observant in the way it explores marriage and expectation.",
      review: "What stood out to me most in this book was how much it says through character dynamics and social pressure. It is not loud, but it is very intentional. I liked how it explored marriage, family, and gender expectations in a way that still felt personal.",
      quote: "Sometimes silence says more than confrontation ever could.",
      themes: "Marriage, expectation, gender, family, social pressure.",
      recommend: "A strong read for people who enjoy literary fiction with social commentary and strong character perspective.",
      authorBio: "Peace Adzo Medie is a Ghanaian writer and scholar whose work often explores gender, society, and relationships."
    },
    {
      id: "maame",
      title: "Maame",
      author: "Jessica George",
      image: "books-authors/maame-book.jpg",
      authorImage: "books-authors/maame-author.webp",
      genre: "literary",
      rating: "★★★★★",
      tagline: "Tender, relatable, and deeply reflective about identity and adulthood.",
      review: "This book felt very human to me. I liked how it captured the awkwardness, pressure, and loneliness that can come with trying to figure yourself out while still carrying responsibility for other people. It felt honest in a way that made it easy to connect to.",
      quote: "Growing up is not a straight line.",
      themes: "Identity, adulthood, family, loneliness, self-discovery.",
      recommend: "Perfect for readers who enjoy introspective fiction and stories about finding yourself.",
      authorBio: "Jessica George is a British-Ghanaian author whose work explores identity, family, and coming into adulthood."
    },
    {
      id: "normal-people",
      title: "Normal People",
      author: "Sally Rooney",
      image: "books-authors/normal-people-book.jpg",
      authorImage: "books-authors/normal-people-author.webp",
      genre: "romance",
      rating: "★★★★☆",
      tagline: "Quiet but intense, with a relationship that feels messy and real.",
      review: "What I found most interesting about this book was how much emotion it creates through restraint. The relationship is not dramatic in a typical way, but it still feels intense. It captures miscommunication, timing, and emotional vulnerability really well.",
      quote: "People can be deeply connected and still miss each other.",
      themes: "Love, miscommunication, class, vulnerability, timing.",
      recommend: "A good fit for readers who like character-driven relationship stories with emotional complexity.",
      authorBio: "Sally Rooney is an Irish novelist known for writing intimate, character-driven stories about relationships and social dynamics."
    },
    {
      id: "seven-year-slip",
      title: "The Seven Year Slip",
      author: "Ashley Poston",
      image: "books-authors/seven-year-slip-book.jpg",
      authorImage: "books-authors/seven-year-slip-author.jpeg",
      genre: "romance",
      rating: "★★★★☆",
      tagline: "Whimsical, heartfelt, and easy to get emotionally invested in.",
      review: "This book blends romance with a slightly magical feeling in a way that still feels emotional and grounded. I liked how warm it felt overall. It is one of those books that feels comforting while still being creative.",
      quote: "Some love stories bend time.",
      themes: "Love, time, grief, hope, healing.",
      recommend: "Great for readers who like romance with a touch of magic and a cozy emotional tone.",
      authorBio: "Ashley Poston is an author known for contemporary and magical romance stories with warmth and heart."
    }
  ];

  const booksGrid = document.getElementById("books-grid");
  const pageTitle = document.getElementById("books-page-title");
  const pageSubtitle = document.getElementById("books-page-subtitle");

  if (booksGrid) {
    const params = new URLSearchParams(window.location.search);
    const selectedGenre = params.get("genre") || "all";

    const genreTitles = {
      all: "All Books",
      romance: "Romance & Contemporary Fiction",
      manga: "Manga & Action",
      literary: "Literary & Reflective Reads"
    };

    const filteredBooks =
      selectedGenre === "all"
        ? books
        : books.filter((book) => book.genre === selectedGenre);

    pageTitle.textContent = genreTitles[selectedGenre] || "Books";
    pageSubtitle.textContent = `${filteredBooks.length} book${filteredBooks.length !== 1 ? "s" : ""} on this shelf.`;

    booksGrid.innerHTML = filteredBooks
      .map(
        (book) => `
          <a href="book.html?id=${book.id}" class="book-card">
            <div class="book-circle">
              <img class="book-cover" src="${book.image}" alt="${book.title} cover" />
            </div>
            <h3>${book.title}</h3>
            <p>${book.author}</p>
          </a>
        `
      )
      .join("");
  }

  const bookTitle = document.getElementById("book-title");

  if (bookTitle) {
    const params = new URLSearchParams(window.location.search);
    const bookId = params.get("id");

    const selectedBook = books.find((book) => book.id === bookId);

    if (selectedBook) {
      document.title = `${selectedBook.title} | Book Club`;

      document.getElementById("book-cover").src = selectedBook.image;
      document.getElementById("book-cover").alt = `${selectedBook.title} cover`;

      document.getElementById("book-title").textContent = selectedBook.title;
      document.getElementById("book-author").textContent = `by ${selectedBook.author}`;
      document.getElementById("book-rating").textContent = selectedBook.rating;
      document.getElementById("book-genre").textContent = selectedBook.genre;
      document.getElementById("book-tagline").textContent = selectedBook.tagline;

      document.getElementById("author-image").src = selectedBook.authorImage;
      document.getElementById("author-image").alt = `${selectedBook.author} portrait`;
      document.getElementById("author-name").textContent = selectedBook.author;
      document.getElementById("author-bio").textContent = selectedBook.authorBio;

      document.getElementById("book-review-text").textContent = selectedBook.review;
      document.getElementById("book-quote").textContent = selectedBook.quote;
      document.getElementById("book-themes").textContent = selectedBook.themes;
      document.getElementById("book-recommend").textContent = selectedBook.recommend;
    } else {
      document.querySelector(".book-page").innerHTML = `
        <a href="books.html?genre=all" class="back-link">← back to shelf</a>
        <h1>Book not found</h1>
        <p>That book page does not exist yet.</p>
      `;
    }
  }
});