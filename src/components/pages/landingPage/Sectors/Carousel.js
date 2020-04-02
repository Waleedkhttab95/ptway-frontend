import React from 'react';
import { Col, Carousel, Card } from 'antd';

const CarouselCom = () => {
  return (
    <div className="carousel-sector">
      <Col md={6}></Col>
      <Col md={12}>
        <Carousel autoplay={true} className="sector-carousel">
          <Card title="Card title" bordered={false} className="slide-elm">
            <h3>الفعاليات</h3>
            <div className="elm-table">
              <h6>استقبال</h6>
              <h6>مدخل بيانات</h6>
              <h6>منظم</h6>
            </div>
            <div className="elm-table">
              <h6>ممثل</h6>
              <h6>فني صوت</h6>
              <h6>مترجم</h6>
            </div>
            <div className="elm-table">
              <h6>قارئ صوتي</h6>
              <h6>مدير فعاليات</h6>
            </div>
          </Card>
          <Card title="Card title" bordered={false} className="slide-elm">
            <h3>قطاع التجزئة</h3>
            <div className="elm-table">
              <h6>استقبال</h6>
              <h6>مدخل بيانات</h6>
              <h6>منظم</h6>
            </div>
            <div className="elm-table">
              <h6>ممثل</h6>
              <h6>فني صوت</h6>
              <h6>مترجم</h6>
            </div>
            <div className="elm-table">
              <h6>قارئ صوتي</h6>
              <h6>مدير فعاليات</h6>
            </div>
          </Card>
          <Card title="Card title" bordered={false} className="slide-elm">
            <h3>القطاع الصحي</h3>
            <div className="elm-table">
              <h6>استقبال</h6>
              <h6>مدخل بيانات</h6>
              <h6>منظم</h6>
            </div>
            <div className="elm-table">
              <h6>ممثل</h6>
              <h6>فني صوت</h6>
              <h6>مترجم</h6>
            </div>
            <div className="elm-table">
              <h6>قارئ صوتي</h6>
              <h6>مدير فعاليات</h6>
            </div>
          </Card>
          <Card title="Card title" bordered={false} className="slide-elm">
            <h3>قطاع الضيافة</h3>
            <div className="elm-table">
              <h6>استقبال</h6>
              <h6>مدخل بيانات</h6>
              <h6>منظم</h6>
            </div>
            <div className="elm-table">
              <h6>ممثل</h6>
              <h6>فني صوت</h6>
              <h6>مترجم</h6>
            </div>
            <div className="elm-table">
              <h6>قارئ صوتي</h6>
              <h6>مدير فعاليات</h6>
            </div>
          </Card>
          <Card title="Card title" bordered={false} className="slide-elm">
            <h3>الشركات</h3>
            <div className="elm-table">
              <h6>استقبال</h6>
              <h6>مدخل بيانات</h6>
              <h6>منظم</h6>
            </div>
            <div className="elm-table">
              <h6>ممثل</h6>
              <h6>فني صوت</h6>
              <h6>مترجم</h6>
            </div>
            <div className="elm-table">
              <h6>قارئ صوتي</h6>
              <h6>مدير فعاليات</h6>
            </div>
          </Card>
        </Carousel>
      </Col>
      <Col md={6}></Col>
    </div>
  );
};

export default CarouselCom;
