### Newyork Times

url <- 'https://archive.nytimes.com/www.nytimes.com/learning/general/onthisday/big/0911.html'

library(httr)

html <- GET(url)

library(XML)

html.parsed <- htmlParse(html)

text <- xpathSApply(html.parsed,
                    '//p',
                    xmlValue)
str(text)

text <- text[text != ""]
text <- paste(text, collapse = " ")

text <- gsub('\\s{2,} | \n', "", text)
text

library(tm)

doc <- VCorpus(VectorSource(text))
doc

inspect(doc)

doc <- tm_map(doc, content_transformer(tolower))

mystopwords <- c(stopwords('english'),
                 c('also', 'among', 'but', 'even', 'four', 'get', 'one', 'said',
                   'the', 'there', 'two', 'three'))

doc <- tm_map(doc, removeWords, mystopwords)
doc <- tm_map(doc, removePunctuation)
doc <- tm_map(doc, removeNumbers)
doc <- tm_map(doc, stripWhitespace)
doc <- tm_map(doc, stemDocument)

dtm <- DocumentTermMatrix(doc)
dtm

inspect(dtm[,1:10])

term.freq <- colSums(as.matrix(dtm))
head(term.freq)
term.freq[order(term.freq, decreasing = TRUE)][1:10]

library(wordcloud)
library(RColorBrewer)

set.seed(123)

wordcloud(words = names(term.freq), freq=term.freq,
          scale = c(4, 0.4), min.freq=3, rot.per = 0,
          random.order = FALSE, random.color = FALSE,
          colors = brewer.pal(5, 'Set1'))
