import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

export default function Index() {
  const [beforeAfterIndex, setBeforeAfterIndex] = useState(0);

  const beforeAfterProjects = [
    {
      before: 'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=800&q=80',
      after: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
    },
    {
      before: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800&q=80',
      after: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80',
    },
  ];

  const advantages = [
    { icon: 'Layers', text: 'Утепление + отделка 2 в 1' },
    { icon: 'Weight', text: 'Вес 5–7 кг/м²' },
    { icon: 'Hammer', text: 'Монтаж без мокрых процессов' },
    { icon: 'Sun', text: 'Не выгорают' },
    { icon: 'ShieldCheck', text: 'Не трескаются' },
    { icon: 'Wind', text: 'Паропроницаемость' },
    { icon: 'Clock', text: 'Срок службы 50 лет' },
  ];

  const panels = [
    { name: 'Под кирпич', price: '1 200', image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80' },
    { name: 'Ригель хаос', price: '1 350', image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=600&q=80' },
    { name: 'Блок', price: '1 150', image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=600&q=80' },
    { name: 'Однотонные панели', price: '1 100', image: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=600&q=80' },
  ];

  const decorElements = [
    { name: 'Наличники и доборы', image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=400&q=80' },
    { name: 'Русты', image: 'https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=400&q=80' },
    { name: 'Молдинги', image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=400&q=80' },
    { name: 'Отливы', image: 'https://images.unsplash.com/photo-1600607688960-e095ff8d6a1f?w=400&q=80' },
  ];

  const colors = [
    'Песочное утро', 'Золотой песок', 'Сафран', 'Персиковая глина',
    'Терракота', 'Сицилийский апельсин', 'Красная терракота', 'Спелая вишня',
    'Голубой туман', 'Графит', 'Арктический белый', 'Латте', 'Капучино', 'Шоколадный клинкер'
  ];

  const seamColors = ['Белый', 'Серый', 'Тёмно-коричневый', 'Чёрный'];

  return (
    <div className="min-h-screen bg-white">
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold text-[#D2691E]">Flesto</div>
          <nav className="hidden md:flex gap-8">
            <a href="#catalog" className="hover:text-[#D2691E] transition-colors">Каталог</a>
            <a href="#advantages" className="hover:text-[#D2691E] transition-colors">Преимущества</a>
            <a href="#visualization" className="hover:text-[#D2691E] transition-colors">Визуализация</a>
            <a href="#contacts" className="hover:text-[#D2691E] transition-colors">Контакты</a>
          </nav>
          <Button className="bg-[#D2691E] hover:bg-[#C25810]">
            <Icon name="Phone" size={16} className="mr-2" />
            +7 (920) 123-45-67
          </Button>
        </div>
      </header>

      <section className="relative h-screen flex items-center justify-center mt-16">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=80" 
            alt="Hero" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
        <div className="container mx-auto px-4 z-10 text-center text-white animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Фасадные термопанели<br />под кирпич
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            Утепление и отделка 2 в 1 • Производство и монтаж в Рязани и области
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="bg-[#D2691E] hover:bg-[#C25810] text-lg px-8">
              Получить прайс
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10 text-lg px-8">
              Сделать визуализацию
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-3">
              <Icon name="Home" size={32} />
              <div className="text-left">
                <div className="text-3xl font-bold">20 000+</div>
                <div className="text-sm text-gray-300">м² установлено</div>
              </div>
            </div>
            <div className="flex items-center justify-center gap-3">
              <Icon name="Award" size={32} />
              <div className="text-left">
                <div className="text-3xl font-bold">5 лет</div>
                <div className="text-sm text-gray-300">производства</div>
              </div>
            </div>
            <div className="flex items-center justify-center gap-3">
              <Icon name="Flame" size={32} />
              <div className="text-left">
                <div className="text-3xl font-bold">Класс Г1</div>
                <div className="text-sm text-gray-300">пожаробезопасности</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">До / После</h2>
          
          <div className="max-w-5xl mx-auto mb-12">
            <div className="relative h-[500px] overflow-hidden rounded-lg">
              <div className="grid grid-cols-2 h-full">
                <div className="relative">
                  <img 
                    src={beforeAfterProjects[beforeAfterIndex].before} 
                    alt="До" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-black/70 text-white px-4 py-2 rounded-md">
                    До
                  </div>
                </div>
                <div className="relative">
                  <img 
                    src={beforeAfterProjects[beforeAfterIndex].after} 
                    alt="После" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-[#D2691E] text-white px-4 py-2 rounded-md">
                    После
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex justify-center gap-4 mt-6">
              {beforeAfterProjects.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setBeforeAfterIndex(idx)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    idx === beforeAfterIndex ? 'bg-[#D2691E] w-8' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>

          <Card className="max-w-2xl mx-auto border-2 border-[#D2691E]">
            <CardContent className="p-8 text-center">
              <Icon name="Sparkles" size={48} className="mx-auto mb-4 text-[#D2691E]" />
              <h3 className="text-2xl font-bold mb-2">Бесплатная визуализация</h3>
              <p className="text-gray-600 mb-4">
                Загрузите фото вашего дома — мы покажем, как он будет выглядеть с нашими панелями
              </p>
              <Button className="bg-[#D2691E] hover:bg-[#C25810]">
                Получить визуализацию
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="advantages" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">Преимущества Flesto</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {advantages.map((adv, idx) => (
              <Card key={idx} className="transition-transform hover:scale-105 border-0 shadow-lg">
                <CardContent className="p-6 text-center">
                  <Icon name={adv.icon} size={48} className="mx-auto mb-4 text-[#D2691E]" />
                  <p className="font-semibold">{adv.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="catalog" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">Каталог панелей</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
            {panels.map((panel, idx) => (
              <Card key={idx} className="overflow-hidden transition-transform hover:scale-105">
                <img 
                  src={panel.image} 
                  alt={panel.name} 
                  className="w-full h-64 object-cover"
                />
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-2">{panel.name}</h3>
                  <p className="text-3xl text-[#D2691E] font-bold">от {panel.price} ₽/м²</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button size="lg" variant="outline" className="border-2 border-[#D2691E] text-[#D2691E] hover:bg-[#D2691E] hover:text-white">
              Посмотреть примеры фасадов
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">Декоративные элементы</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {decorElements.map((elem, idx) => (
              <Card key={idx} className="overflow-hidden transition-transform hover:scale-105">
                <img 
                  src={elem.image} 
                  alt={elem.name} 
                  className="w-full h-48 object-cover"
                />
                <CardContent className="p-4">
                  <p className="font-semibold text-center">{elem.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-8">Палитра цветов</h2>
          <p className="text-center text-gray-600 mb-12 text-lg">14 цветов панелей и 4 варианта швов</p>
          
          <div className="max-w-6xl mx-auto mb-12">
            <h3 className="text-2xl font-bold mb-6">Цвета панелей</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
              {colors.map((color, idx) => {
                const colorMap: Record<number, string> = {
                  0: '#F5E6C8',
                  1: '#E8C068',
                  2: '#FFD700',
                  3: '#FFDAB9',
                  4: '#D2691E',
                  5: '#FF7F50',
                  6: '#C04000',
                  7: '#8B0000',
                  8: '#B0C4DE',
                  9: '#4A4A4A',
                  10: '#F8F8FF',
                  11: '#D4B896',
                  12: '#A67B5B',
                  13: '#3B2414'
                };
                
                return (
                  <div key={idx} className="text-center">
                    <div className="w-full aspect-square rounded-lg mb-2 shadow-md transition-transform hover:scale-105" 
                         style={{
                           background: colorMap[idx],
                           border: idx === 10 ? '1px solid #e5e5e5' : 'none'
                         }}
                    />
                    <p className="text-sm">{color}</p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="max-w-6xl mx-auto">
            <h3 className="text-2xl font-bold mb-6">Цвета швов</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {seamColors.map((color, idx) => (
                <div key={idx} className="text-center">
                  <div className="w-full h-24 rounded-lg mb-2 shadow-md transition-transform hover:scale-105" 
                       style={{
                         background: idx === 0 ? '#FFFFFF' : idx === 1 ? '#999999' : idx === 2 ? '#4A3728' : '#000000',
                         border: idx === 0 ? '1px solid #e5e5e5' : 'none'
                       }}
                  />
                  <p className="text-sm">{color}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="visualization" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Визуализация по фото</h2>
              <p className="text-xl text-gray-600">Увидьте, как будет выглядеть ваш дом — бесплатно</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="relative h-64 rounded-lg overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=600&q=80" 
                  alt="Пример визуализации" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-4 left-4 bg-black/70 text-white px-4 py-2 rounded-md">
                  Пример визуализации 1
                </div>
              </div>
              <div className="relative h-64 rounded-lg overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80" 
                  alt="Пример визуализации" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-4 left-4 bg-black/70 text-white px-4 py-2 rounded-md">
                  Пример визуализации 2
                </div>
              </div>
            </div>

            <Card className="border-2 border-[#D2691E]">
              <CardContent className="p-8">
                <form className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold mb-2">Ваше имя</label>
                    <Input placeholder="Иван Иванов" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2">Телефон</label>
                    <Input placeholder="+7 (920) 123-45-67" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2">Загрузите фото дома</label>
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-[#D2691E] transition-colors cursor-pointer">
                      <Icon name="Upload" size={48} className="mx-auto mb-4 text-gray-400" />
                      <p className="text-gray-600">Нажмите или перетащите фото</p>
                    </div>
                  </div>
                  <Button className="w-full bg-[#D2691E] hover:bg-[#C25810] text-lg py-6">
                    Получить визуализацию бесплатно
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">Производство Flesto</h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
            <Card className="bg-gray-800 border-0 text-white">
              <CardContent className="p-8 text-center">
                <Icon name="Factory" size={64} className="mx-auto mb-6 text-[#D2691E]" />
                <h3 className="text-2xl font-bold mb-4">Собственное оборудование</h3>
                <p className="text-gray-300">Контролируем качество на каждом этапе производства</p>
              </CardContent>
            </Card>
            <Card className="bg-gray-800 border-0 text-white">
              <CardContent className="p-8 text-center">
                <Icon name="ShieldCheck" size={64} className="mx-auto mb-6 text-[#D2691E]" />
                <h3 className="text-2xl font-bold mb-4">Контроль качества</h3>
                <p className="text-gray-300">Проверяем каждую панель перед отгрузкой</p>
              </CardContent>
            </Card>
            <Card className="bg-gray-800 border-0 text-white">
              <CardContent className="p-8 text-center">
                <Icon name="Users" size={64} className="mx-auto mb-6 text-[#D2691E]" />
                <h3 className="text-2xl font-bold mb-4">Опыт 5 лет</h3>
                <p className="text-gray-300">Профессиональная команда с богатым опытом</p>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto text-center">
            <div>
              <div className="text-5xl font-bold text-[#D2691E] mb-2">20 000+</div>
              <p className="text-gray-300">м² установлено</p>
            </div>
            <div>
              <div className="text-5xl font-bold text-[#D2691E] mb-2">±1 мм</div>
              <p className="text-gray-300">точность геометрии</p>
            </div>
            <div>
              <div className="text-5xl font-bold text-[#D2691E] mb-2">5-30 дней</div>
              <p className="text-gray-300">срок производства</p>
            </div>
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">Шоу-рум в Рязани</h2>
          
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div>
              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4">
                  <Icon name="MapPin" size={24} className="text-[#D2691E] mt-1" />
                  <div>
                    <div className="font-semibold mb-1">Адрес</div>
                    <p className="text-gray-600">г. Рязань, ул. Промышленная, д. 15</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Icon name="Phone" size={24} className="text-[#D2691E] mt-1" />
                  <div>
                    <div className="font-semibold mb-1">Телефон</div>
                    <p className="text-gray-600">+7 (920) 123-45-67</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Icon name="Clock" size={24} className="text-[#D2691E] mt-1" />
                  <div>
                    <div className="font-semibold mb-1">Режим работы</div>
                    <p className="text-gray-600">Пн-Пт: 9:00 — 18:00<br />Сб: 10:00 — 16:00</p>
                  </div>
                </div>
              </div>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">Записаться в шоу-рум</h3>
                  <form className="space-y-4">
                    <Input placeholder="Ваше имя" />
                    <Input placeholder="Телефон" />
                    <Textarea placeholder="Комментарий (необязательно)" rows={3} />
                    <Button className="w-full bg-[#D2691E] hover:bg-[#C25810]">
                      Записаться на визит
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            <div className="h-[500px] bg-gray-200 rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2340.8!2d39.7!3d54.6!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTTCsDM2JzAwLjAiTiAzOcKwNDInMDAuMCJF!5e0!3m2!1sru!2sru!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="text-3xl font-bold text-[#D2691E] mb-4">Flesto</div>
              <p className="text-gray-400">Фасадные термопанели под кирпич</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <p className="text-gray-400 mb-2">+7 (920) 123-45-67</p>
              <p className="text-gray-400">г. Рязань, ул. Промышленная, 15</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Навигация</h4>
              <div className="space-y-2">
                <a href="#catalog" className="block text-gray-400 hover:text-[#D2691E] transition-colors">Каталог</a>
                <a href="#advantages" className="block text-gray-400 hover:text-[#D2691E] transition-colors">Преимущества</a>
                <a href="#visualization" className="block text-gray-400 hover:text-[#D2691E] transition-colors">Визуализация</a>
                <a href="#contacts" className="block text-gray-400 hover:text-[#D2691E] transition-colors">Контакты</a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Flesto. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}