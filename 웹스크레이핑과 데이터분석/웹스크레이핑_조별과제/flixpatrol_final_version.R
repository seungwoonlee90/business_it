library(rvest)
library(XML)
library(RCurl)
library(stringr)

##################
#Genre_in_Netflix#
##################

url <- 'https://flixpatrol.com/preferences/netflix/genre/'
country_url <- getURL(url, .encoding='EUC_KR')
html.parsed <- htmlParse(country_url)

genre <- xpathSApply(html.parsed,
                   "//a[@class='flex items-center mx-4 my-1 hover:underline whitespace-nowrap']",
                   xmlValue)
genre <- gsub('\n|\t', '', genre)
genre <- tolower(genre)
genre <- genre[-11] #musical
genre <- genre[-18] #other
genre <- genre[-18] #unknown
genre

############################
#Genre_Prop_by_Each_Country#
############################

ctr_genre <- data.frame()

for (i in genre) {
  url_head <- 'https://flixpatrol.com/preferences/netflix/genre/'
  url <- paste0(url_head, i, '/2021-1/')
  print(url)
  country_url <- getURL(url, .encoding='EUC_KR')
  html.parsed <- htmlParse(country_url)
  
  country_nm <- xpathSApply(html.parsed,
                      "//td[@class='table-td']",
                      xmlValue)
  country_nm <- gsub(' ', '-', country_nm)
  country_nm <- tolower(country_nm)
  
  prop <- xpathSApply(html.parsed,
                      "//td[@class='table-td w-18 text-right text-gray-500 table-hover:text-gray-400 tabular-nums']",
                      xmlValue)
  
  prop <- data.frame(country = country_nm, genre = i, prop = prop)
  ctr_genre <- rbind(ctr_genre, prop)
}

#####################
#Country_Information#
#####################

country <- data.frame()

for (i in country_nm) {
  url_head <- 'https://flixpatrol.com/market/'
  url <- paste0(url_head, i, '/')
  print(url)
  flixpatrol <- getURL(url, .encoding='EUC_KR')
  html.parsed <- htmlParse(flixpatrol)
  
  continent <- xpathSApply(html.parsed,
                           "//div[@class='flex flex-col sm:flex-row items-baseline text-gray-400']/span",
                           xmlValue)
  section_country <- data.frame(country=i,
                                continent = as.list(continent)[[2]],
                                region = as.list(continent)[[4]],
                                population = as.list(continent)[[6]],
                                gdp = as.list(continent)[[8]])
  country <- rbind(country, section_country)
}

#################
#DataFrame_Merge#
#################

library(reshape2)
ctr_genre <- ctr_genre %>%
  acast(country ~ genre, value.var='prop', fill = 0) 

country_total <- cbind(country, ctr_genre)

head(country_total)

write.csv(country_total,"/Users/seungwoon/Dropbox/country_total.csv", row.names = FALSE)


###############
#Preprocessing#
###############

library(tidyverse)
library(ggplot2)

flix <- read.csv('/Users/seungwoon/Dropbox/country_total.csv')
flix <- data.frame(flix)

flix$continent <- gsub(' ', '', flix$continent)
flix$population <- gsub(',', '', flix$population) %>%
  as.numeric()
flix$gdp <- gsub('[[:punct:]]', '', flix$gdp) %>%
  as.numeric()

flix$action <- gsub('%', '', flix$action) %>%
  as.numeric()
flix$adventure <- gsub('%', '', flix$adventure) %>%
  as.numeric()
flix$animated <- gsub('%', '', flix$animated) %>%
  as.numeric()
flix$comedy <- gsub('%', '', flix$comedy) %>%
  as.numeric()
flix$crime <- gsub('%', '', flix$crime) %>%
  as.numeric()
flix$documentary <- gsub('%', '', flix$documentary) %>%
  as.numeric()
flix$drama <- gsub('%', '', flix$drama) %>%
  as.numeric()
flix$family <- gsub('%', '', flix$family) %>%
  as.numeric()
flix$fantasy <- gsub('%', '', flix$fantasy) %>%
  as.numeric()
flix$horror <- gsub('%', '', flix$horror) %>%
  as.numeric()
flix$romance <- gsub('%', '', flix$romance) %>%
  as.numeric()
flix$sci.fi <- gsub('%', '', flix$sci.fi) %>%
  as.numeric()
flix$superhero <- gsub('%', '', flix$superhero) %>%
  as.numeric()
flix$thriller <- gsub('%', '', flix$thriller) %>%
  as.numeric()
flix$unscripted <- gsub('%', '', flix$unscripted) %>%
  as.numeric()
flix$war <- gsub('%', '', flix$war) %>%
  as.numeric()
flix$western <- gsub('%', '', flix$western) %>%
  as.numeric()

###############
#Visualization#
###############

flix %>% 
  group_by(continent) %>% 
  summarise(n=n()) %>%
  ggplot(aes(x=continent, y=n, fill=continent)) +
  geom_col() +
  geom_text(aes(label=n),
            vjust=1.5,
            color='white',
            size=4) +
  labs(title = 'Country Count by Continent',
       caption = 'data source : flixpatrol',
       x='Continent', y='Country Count') + 
  scale_fill_brewer(palette = "Paired") +
  theme_classic() +
  scale_x_discrete(limits=c("Europe", "Asia", "LatinAmerica", 'Africa',
                            'NorthAmerica', 'Australia')) +
  theme(legend.position = 'none',
        plot.title = element_text(face="bold.italic", size=15),
        axis.title = element_text(face="bold.italic", size=10),
        axis.text = element_text(size=9, color='dimgray'))

### add_corr
genre <- colnames(flix)[6:22]
for (i in genre) {
  flix %>%
    select(population, i) %>%
    cor() %>%
    head(1) %>%
    print()
  
  flix %>%
    select(gdp, i) %>%
    cor() %>%
    head(1)%>%
    print()
}

ggplot(flix, aes(x=gdp, y=documentary)) +
  geom_point() +
  geom_smooth(method = "lm", se=FALSE, color="red", formula = y ~ x) +
  labs(title = 'Documentary - gdp',
       caption = 'data source : flixpatrol') +
  theme_classic() +
  theme(legend.position = 'none',
        plot.title = element_text(face="bold.italic", size=15),
        axis.title = element_text(face="bold.italic", size=10),
        axis.text = element_text(size=9, color='dimgray'))

ggplot(flix, aes(x=gdp, y=documentary, color=continent, shape=continent)) +
  geom_point() +
  labs(title = 'Documentary - gdp',
       caption = 'data source : flixpatrol') +
  theme_classic() +
  theme(legend.position = c(0.9, 0.8),
        plot.title = element_text(face="bold.italic", size=15),
        axis.title = element_text(face="bold.italic", size=10),
        axis.text = element_text(size=9, color='dimgray'))

ggplot(flix, aes(x=gdp, y=documentary, color=continent, shape=continent)) + 
  geom_point() +
  geom_smooth(method = "lm", se=FALSE, color="red", formula = y ~ x) +
  labs(title = 'Documentary - gdp',
       caption = 'data source : flixpatrol') +
  theme_classic() +
  theme(legend.position = c(0.9, 0.8),
        plot.title = element_text(face="bold.italic", size=15),
        axis.title = element_text(face="bold.italic", size=10),
        axis.text = element_text(size=9, color='dimgray'))

### add_country_name
ggplot(flix, aes(x=gdp, y=documentary, color=continent, shape=continent)) + 
  geom_point() +
  geom_smooth(method = "lm", se=FALSE, color="red", formula = y ~ x) +
  geom_text(aes(label=country),
            color='black',
            size=2.3) +
  labs(title = 'Documentary - gdp',
       caption = 'data source : flixpatrol') +
  theme_classic() +
  theme(legend.position = c(0.9, 0.8),
        plot.title = element_text(face="bold.italic", size=15),
        axis.title = element_text(face="bold.italic", size=10),
        axis.text = element_text(size=9, color='dimgray'))

flix %>%
  subset(region == 'East Asia') %>%
  select(country, continent, region, population, gdp, documentary) %>%
  ggplot(aes(x=reorder(country, -documentary), y=documentary, fill=country)) +
  geom_col() +
  geom_text(aes(label=documentary),
            vjust=1.2,
            color='black',
            size=4) +
  labs(title = 'Documentary(%) in East Asia',
       caption = 'data source : flixpatrol',
       x='Country', y='Documentary(%)') + 
  scale_fill_brewer(palette = "Paired") +
  theme_classic() +
  theme(legend.position = 'none',
        plot.title = element_text(face="bold.italic", size=15),
        axis.title = element_text(face="bold.italic", size=10),
        axis.text = element_text(size=9, color='dimgray'))


### add_gpd
flix %>%
  subset(region == 'East Asia') %>%
  select(country, continent, region, population, gdp, documentary) %>%
  ggplot(aes(x=reorder(country, -gdp), y=gdp, fill=country)) +
  geom_col() +
  geom_text(aes(label=gdp),
            vjust=1.2,
            color='black',
            size=4) +
  labs(title = 'GDP per capital ($) in East Asia',
       caption = 'data source : flixpatrol',
       x='Country', y='GDP per capital ($)') + 
  scale_fill_brewer(palette = "Paired") +
  theme_classic() +
  theme(legend.position = 'none',
        plot.title = element_text(face="bold.italic", size=15),
        axis.title = element_text(face="bold.italic", size=10),
        axis.text = element_text(size=9, color='dimgray'))



flix %>%
  subset(region == 'East Asia') %>%
  select(country, continent, region, population, gdp, documentary) %>%
  ggplot(aes(x=gdp, y=documentary, color=country, shape=country, size=2)) +
  geom_point() +
  geom_text(aes(label=country),
            color='black',
            size=3.6) +
  labs(title = 'Documentary(%) in East Asia',
       caption = 'data source : flixpatrol',
       x='GDP', y='Documentary(%)') + 
  scale_fill_brewer(palette = "Paired") +
  theme_classic() +
  theme(legend.position = 'none',
        plot.title = element_text(face="bold.italic", size=15),
        axis.title = element_text(face="bold.italic", size=10),
        axis.text = element_text(size=9, color='dimgray'))
  
#####################
#Random_Forest_BASIC#
#####################

flix$continent <- as.factor(flix$continent)
flix$region <- as.factor(flix$region)
str(flix)

flix_rf <- flix %>%
  select(country, continent, region, population, gdp, documentary)

set.seed(123)
train <- sample(nrow(flix_rf), 0.7*nrow(flix_rf))
flix.train <- flix_rf[train,]
flix.test <- flix_rf[-train,]

library(randomForest)
set.seed(123)

flix.forest <- randomForest(documentary ~ . ,
                            data = flix.train,
                            na.action = na.omit,
                            importance = TRUE)
flix.forest

flix.forest.pred <- predict(flix.forest,
                            newdata = flix.test,
                            type = "response")
head(flix.forest.pred)

flix.forest.pred <- round(flix.forest.pred, 1)
flix.forest.pred
flix.test$documentary

library(Metrics)
rmse(flix.test$documentary, flix.forest.pred)

round(importance(flix.forest), 2)
varImpPlot(flix.forest)

cbind(flix.forest.pred, flix.test$documentary) %>% 
  as.data.frame() %>%
  ggplot(aes(flix.forest.pred, V2)) +
  geom_smooth(method = "lm", se=FALSE, color="red", formula = y ~ x) +
  geom_point(color='dimgray') +
  labs(title = 'Actual and Predict by Random Forest',
       caption = 'data source : flixpatrol') +
  scale_fill_brewer(palette = "Paired") +
  theme_classic() +
  theme(legend.position = 'none',
        plot.title = element_text(face="bold.italic", size=15),
        axis.title = element_text(face="bold.italic", size=10),
        axis.text = element_text(size=9, color='dimgray')) +
  xlab('Atcual') +
  ylab('Predict')

flix.test

#####################
#Random_Forest_CHINA#
#####################

china <- data.frame(country = 'china',
           continent = 'Asia',
           region = 'East Asia',
           population = 1400050000,
           gdp = 17206,
           documentary = NA)


china$continent <- as.factor(china$continent)
china$region <- as.factor(china$region)
levels(china$continent)<- levels(flix$continent)
levels(china$region)<- levels(flix$region)

china.pred <- predict(flix.forest,
                      newdata = china,
                      type = "response")
china.pred


########################
#Date_Country_Title_URL#
########################

result_Title <- data.frame()
library(xml2) #필요 패키지 장착
library(XML)
library(httr)
library(stringr)
library(writexl)

url <- "https://flixpatrol.com/preferences/netflix/region/"

base_html <- GET(url) #기초 url입력
base_html.parsed <- htmlParse(base_html)
All_nation <- xpathSApply(base_html.parsed, 
                          "//td[@class='table-td']",xmlValue) #전체 나라 수집
All_nation <- gsub(" ", "-", All_nation) #url 주소에 맞게 수정
All_dates <- seq(as.Date('2021/04/01'),
                 as.Date('2021/04/30'),1) #수집 기간 별도 설정 필요
#컴퓨팅 시간을 고려하여 1개월씩 진행

result <- data.frame() #데이터 수집을 위한 빈 데이터프레임 생성
for (j in 1:length(All_dates)) {
  for (i in 1:length(All_nation)) {
    
    cat("\n\n날짜 : ", as.character(All_dates[j]), "\t국가 : ", All_nation[i]) #날짜, 국가 출력
    
    url <- paste0("https://flixpatrol.com/top10/netflix/",All_nation[i],"/",All_dates[j],"/") 
    html <- GET(url)
    html.parsed <- htmlParse(html) 
    
    URL_Top10_Netflix <- xpathSApply(html.parsed,
                                     "//td[@class='table-td']/a[@class='hover:underline']/@href") 
    #해당 페이지의 Top10 url 정보 읽어오기
    Top10_Netflix <- xpathSApply(html.parsed,
                                 "//td[@class='table-td']/a[@class='hover:underline']",
                                 xmlValue) #해당 페이지의 Top10 제목 읽어오기
    Top10_Netflix <- unique(data.frame(Top10_Netflix, URL_Top10_Netflix))
    
    if (nrow(Top10_Netflix) == 0){
      cat("\t 해당 사항 없음\n\n")
      next #해당 페이지에 Top10 항목이 없을 경우, 오류 제거
    } else {
      date <- data.frame(rep(All_dates[j],nrow(Top10_Netflix))) #해당 날짜를 컨텐츠 개수만큼 반복
      nation <- data.frame(rep(All_nation[i],nrow(Top10_Netflix))) #해당 국가를 컨텐츠 개수만큼 반복
      
      result_1 <- cbind(date,nation)
      result_2 <- cbind(result_1,Top10_Netflix)
      names(result_2) <- names(result)
      result <- rbind(result,result_2)
      names(result) <- c("Date", "Country","Title","URL")
      cat("\n")
    }
  }
}
result_Title <- rbind(result_Title, result) #1개월치 결과를 전체 결과에 합치기
getwd()
write_xlsx(result_Title, "result_Title.xlsx")
#수집결과 = 195,890개 데이터 수집, 2021-01-01 ~ 2021-04-30, 82개국, 2015개 타이틀 추출


########################
#Top10 Contents summary#
########################
Content_url <- unique(result_Title$URL) #중복 url제거
length(Content_url) #2015개 확인
content <- data.frame() 
for (k in 1:length(Content_url)) {
  cat(k,"번째\n")
  content_url <- paste0("https://flixpatrol.com",Content_url[k])
  content_html <- GET(content_url)
  content_html.parsed <- htmlParse(content_html)
  content_tag <- xpathSApply(content_html.parsed,
                             "//div[@class='flex flex-wrap text-gray-500']/div/span/text()",xmlValue) #태그 정보 수집
  content_tag <- content_tag[c(content_tag != "|")] #막대바 삭제
  content_tag <- content_tag[c(content_tag != "\n")] #\n값 삭제
  content_last_tag <- content_tag[length(content_tag)] #태그 전처리 및 마지막 태그만 추출
  
  content_info <- xpathSApply(content_html.parsed,
                              "//div[@class='card-body']",xmlValue)
  content_info <- content_info[1]
  content_info <- gsub("\\\n","",content_info)
  content_info <- gsub("\\\t","",content_info) #소개글 추출 및 전처리
  if (content_info == "NULL"){
    content_info <- " " #소개글이 없을 경우 오류 방지 
  } else{
    content_info <- content_info
  }
  Tag_info <- cbind(Content_url[k], content_last_tag)
  Tag_info <- cbind(Tag_info, content_info)
  content <- rbind(content, Tag_info)
  cat("\n")
}
names(content) <- c("URL", "LastTag", "Info") # 리메이크 작품의 경우, 제목이 동일한 이슈가 발생하며, 이를 URL로 구분


#######
#Merge#날짜 및 국가 추출정보와 컨텐츠 정보(URL, 태그, 소개글) 결합 
#######

Final_result <- merge(result_Title, content, by="URL") #URL컬럼을 기준으로 병합

library(plyr)
Final_result <- arrange(Final_result,Date,Country) #날짜와 나라를 기준으로 정렬
Final_result[7] <- Final_result[5] #컬럼순서 순서변경
Final_result[5] <- Final_result[1] #컬럼순서 순서변경
Final_result <- Final_result[-1] #컬럼순서 순서변경
names(Final_result) <- c("Date","Country", "Title", "URL", "Info", "LastTag") #컬럼명 정리
str(Final_result) #최종 데이터 구조 확인

write_xlsx(Final_result,"Final_result.xlsx")
write.csv2(Final_result,"Final_result_csv.csv") 


###############
#Text_Analysis#
###############
library(tm) 
Final_result <- read.csv2(file = "Final_result_csv.csv") #위 결과값 불러오기
Final_result <- Final_result[c(-1,-2,-3,-4)] #열넘버와 나라 및 날짜 정보 삭제
Final_result <- unique(Final_result) #중복값 제거 
Final_result <- Final_result[!(Final_result$Info == "" ), ] #소개글이 빈행 삭제
Final_result <- Final_result[!(Final_result$Info == " " ),] #소개글이 공백만 있는 행 삭제
Final_result$doc_id <- c(1:nrow(Final_result)) #doc_id 생성
Final_result <- Final_result[,c(5,3,1,2,4)] #컬럼 순서 변경
names(Final_result) <- c("doc_id", "text","Title","URL","LastTag") #컬럼명 설정
#최종 컨텐츠리스트 = 1855개 텍스트 데이터 추출 (넷플릭스 top 10에 한 번이라도 포함된 컨텐츠)

corpus.docs <- VCorpus(DataframeSource(Final_result))
corpus.docs
class(corpus.docs)

inspect(corpus.docs[[1]])
lapply(corpus.docs, as.character)

corpus.docs <- tm_map(corpus.docs, content_transformer(tolower)) #소문자 변환
corpus.docs <- tm_map(corpus.docs, removeWords, stopwords("english")) #영어 불용어 제거 
myRemove <- content_transformer(function(x, pattern){return(gsub(pattern, "", x))})
corpus.docs <- tm_map(corpus.docs, myRemove, "(f|ht)tp\\S+\\s*")
corpus.docs <- tm_map(corpus.docs, removePunctuation) #문장 부호 제거
corpus.docs <- tm_map(corpus.docs, removeNumbers) #숫자 제거
corpus.docs <- tm_map(corpus.docs, stripWhitespace) #중간 불필요한 공백 제거
corpus.docs <- tm_map(corpus.docs, content_transformer(trimws)) #앞 뒤 공백 제거
corpus.docs <- tm_map(corpus.docs, stemDocument) #어근 추출

# tm_map(corpus.docs, content_transformer(gsub), pattern = "", replacement = "") #원하는 단어를 다른 단어로 대체 
mystopword <- c("can","must", "will", "one", "two", "three", "four", 
                "five", "also")
corpus.docs <- tm_map(corpus.docs, removeWords, mystopword)
corpus.docs <- tm_map(corpus.docs, content_transformer(gsub), pattern = c("transfers"), replacement = "transfer")
corpus.docs <- tm_map(corpus.docs, content_transformer(gsub), pattern = c("famili"), replacement = "family")
corpus.docs <- tm_map(corpus.docs, content_transformer(gsub), pattern = c("becom"), replacement = "become")
corpus.docs <- tm_map(corpus.docs, content_transformer(gsub), pattern = c("stori"), replacement = "story")
corpus.docs <- tm_map(corpus.docs, content_transformer(gsub), pattern = c("produc"), replacement = "product")
corpus.docs <- tm_map(corpus.docs, content_transformer(gsub), pattern = c("littl"), replacement = "little")
corpus.docs <- tm_map(corpus.docs, content_transformer(gsub), pattern = c("marri"), replacement = "marry")
corpus.docs <- tm_map(corpus.docs, content_transformer(gsub), pattern = c("citi"), replacement = "city")
corpus.docs <- tm_map(corpus.docs, content_transformer(gsub), pattern = c("everi"), replacement = "every")
corpus.docs <- tm_map(corpus.docs, content_transformer(gsub), pattern = c("adventur"), replacement = "adventure")
corpus.docs <- tm_map(corpus.docs, content_transformer(gsub), pattern =  "living", replacement = "live")
corpus.docs <- tm_map(corpus.docs, content_transformer(gsub), pattern =  "singl", replacement = "single")
corpus.docs <- tm_map(corpus.docs, content_transformer(gsub), pattern =  "mysteri", replacement = "mystery")
corpus.docs <- tm_map(corpus.docs, content_transformer(gsub), pattern =  "struggl", replacement = "struggle")
corpus.docs <- tm_map(corpus.docs, content_transformer(gsub), pattern =  "spi", replacement = "spy")
corpus.docs <- tm_map(corpus.docs, content_transformer(gsub), pattern =  "seri", replacement = "series")
corpus.docs <- tm_map(corpus.docs, content_transformer(gsub), pattern = c("feared"), replacement = "fear")


###########
#Wordcloud#
###########
library(wordcloud)
library(RColorBrewer)

Content.info <- DocumentTermMatrix(corpus.docs) #문서 용어 행렬 생성
termfreq <- colSums(as.matrix(Content.info)) #단어별 출현 횟수 합친 행렬 생성

wordcloud(words=names(termfreq), freq = termfreq, scale = c(4, 0.5), min.freq = 5, rot.per = 0.1, 
          random.order = FALSE, random.color = FALSE, colors = brewer.pal(6, "Dark2"))




