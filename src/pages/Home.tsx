/**
 * 易针经项目官网首页组件
 * 面向中医诊所老板/医生群体的营销型官网
 */

import React from 'react';
import { Phone, MapPin, Users, TrendingUp, Award, Clock, Shield, Star } from 'lucide-react';
import { Button } from '../components/ui/button';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-orange-50">
      {/* 头部导航区 */}
      <header className="bg-white shadow-md border-b-2 border-red-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <img src="https://pub-cdn.sider.ai/u/U0VEHOZ1EV8/web-coder/685bd991ed3fbefa177e5b5f/resource/ac77644e-7c9d-4bd0-853b-2d5acbdc54ff.png" alt="易针经logo" className="w-12 h-12 rounded-full object-cover" />
              <div>
                <h1 className="text-2xl font-bold text-red-800">易针经</h1>
                <p className="text-sm text-amber-700">创新针灸疗法·快速治疗痛症</p>
              </div>
            </div>
            <nav className="hidden md:flex space-x-8">
              <button onClick={() => document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' })} className="text-gray-700 hover:text-red-800 font-medium">首页</button>
              <button onClick={() => document.getElementById('advantages')?.scrollIntoView({ behavior: 'smooth' })} className="text-gray-700 hover:text-red-800 font-medium">项目优势</button>
              <button onClick={() => document.getElementById('cooperation')?.scrollIntoView({ behavior: 'smooth' })} className="text-gray-700 hover:text-red-800 font-medium">合作模式</button>
              <button onClick={() => document.getElementById('training')?.scrollIntoView({ behavior: 'smooth' })} className="text-gray-700 hover:text-red-800 font-medium">培训体系</button>
              <button onClick={() => document.getElementById('cases')?.scrollIntoView({ behavior: 'smooth' })} className="text-gray-700 hover:text-red-800 font-medium">成功案例</button>
              <button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} className="text-gray-700 hover:text-red-800 font-medium">报名咨询</button>
            </nav>
            <Button className="bg-red-800 hover:bg-red-900 text-white px-6 py-2 rounded-md font-bold">
              立即报名内训
            </Button>
          </div>
        </div>
      </header>

      {/* 首屏Banner区 */}
      <section id="home" className="relative min-h-screen flex items-center bg-gradient-to-br from-red-900 via-red-800 to-red-700 text-white overflow-hidden">


        <div className="relative max-w-6xl mx-auto px-4 py-20">
          <div className="text-center">
            {/* 品牌标识 */}
            <div className="mb-8">
              <span className="inline-block bg-yellow-400 text-black px-6 py-3 rounded-full text-lg font-bold tracking-wide">
                易针经油针
              </span>
              <p className="text-yellow-200 mt-2 text-sm">创新针灸疗法·快速治疗痛症</p>
            </div>

            {/* 主标题 */}
            <h1 className="mb-8">
              <div className="text-gray-200 text-xl md:text-2xl mb-4 font-medium">
                让中医诊所实现
              </div>
              <div className="text-5xl md:text-7xl font-black text-white mb-4 leading-tight">
                营收客流双增长
              </div>
              <div className="text-xl md:text-2xl text-yellow-300 font-bold">
                的爆款技术
              </div>
            </h1>

            {/* 副标题 */}
            <p className="text-xl md:text-2xl text-gray-200 mb-12 max-w-3xl mx-auto leading-relaxed">
              7天能学会的创新针灸疗法<br />
              <span className="text-yellow-300 font-semibold">零门槛·零成本·零风险</span>，快速打造诊所特色项目
            </p>

            {/* 核心价值点 */}
            <div className="grid md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
              <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl">
                <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-6 h-6 text-black" />
                </div>
                <h3 className="text-lg font-bold mb-2">立竿见影</h3>
                <p className="text-gray-200 text-sm">1次体验见效，患者满意度90%+</p>
              </div>
              
              <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl">
                <div className="w-12 h-12 bg-green-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-6 h-6 text-black" />
                </div>
                <h3 className="text-lg font-bold mb-2">零风险合作</h3>
                <p className="text-gray-200 text-sm">0加盟费，3000元押金随时可退</p>
              </div>
              
              <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl">
                <div className="w-12 h-12 bg-orange-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-6 h-6 text-black" />
                </div>
                <h3 className="text-lg font-bold mb-2">高收益分成</h3>
                <p className="text-gray-200 text-sm">联营诊所享70%营收，年增收25-100万</p>
              </div>
            </div>

            {/* 行动按钮 */}
            <div className="flex justify-center mb-8">
              <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold px-8 py-4 text-xl">
                立即免费报名体验公开课
              </Button>
            </div>

            {/* 信任标识 */}
            <div className="inline-flex items-center bg-gradient-to-r from-yellow-400 to-orange-400 text-black px-6 py-3 rounded-full font-bold">
              <span className="text-2xl mr-2">全国300+</span>
              <span>合作诊所见证</span>
            </div>
          </div>
        </div>

        {/* 滚动提示 */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-yellow-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-yellow-400 rounded-full mt-2"></div>
          </div>
        </div>
      </section>

      {/* 项目核心优势区 */}
      <section id="advantages" className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-red-800 mb-4">项目核心优势</h2>
          </div>

          {/* 技术优势板块 */}
          <div className="mb-20">
            <h3 className="text-3xl font-bold text-center text-amber-800 mb-12">三联疗法革新，突破传统局限</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-8 bg-gradient-to-b from-red-50 to-red-100 rounded-lg border-2 border-red-200">
                <img src="https://pub-cdn.sider.ai/u/U0VEHOZ1EV8/web-coder/685bd991ed3fbefa177e5b5f/resource/250f893d-3157-43fd-b117-bfbda8930082.jpg" alt="针具" className="w-32 h-32 mx-auto mb-4 object-cover rounded-full" />
                <h4 className="text-xl font-bold text-red-800 mb-4">针+药+灸三位一体</h4>
                <p className="text-gray-700">物理刺激+药效直达+热灸效应</p>
              </div>
              <div className="text-center p-8 bg-gradient-to-b from-amber-50 to-amber-100 rounded-lg border-2 border-amber-200">
                <img src="https://pub-cdn.sider.ai/u/U0VEHOZ1EV8/web-coder/685bd991ed3fbefa177e5b5f/resource/3b654125-0000-43f1-94c4-ae1171f9d8ed.jpg" alt="微纹针具" className="w-32 h-32 mx-auto mb-4 object-cover rounded-full" />
                <h4 className="text-xl font-bold text-amber-800 mb-4">微纹针具专利</h4>
                <p className="text-gray-700">0.4mm特制针体，微纹凹槽增强药油附着</p>
              </div>
              <div className="text-center p-8 bg-gradient-to-b from-green-50 to-green-100 rounded-lg border-2 border-green-200">
                <img src="https://pub-cdn.sider.ai/u/U0VEHOZ1EV8/web-coder/685bd991ed3fbefa177e5b5f/resource/c4b729cb-b607-42ca-931b-2b352050c1b8.jpg" alt="标准化治疗" className="w-32 h-32 mx-auto mb-4 object-cover rounded-full" />
                <h4 className="text-xl font-bold text-green-800 mb-4">标准化治疗</h4>
                <p className="text-gray-700">按部位定穴，无需死记硬背，行内人一看就懂，行外人一学就会</p>
              </div>
            </div>
          </div>

          {/* 诊所赋能板块 */}
          <div>
            <h3 className="text-3xl font-bold text-center text-amber-800 mb-12">五大赋能，让诊所轻松增收</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="text-center p-8 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg border-2 border-blue-200">
                <img src="https://pub-cdn.sider.ai/u/U0VEHOZ1EV8/web-coder/685bd991ed3fbefa177e5b5f/resource/c33a4d47-c079-4465-bec0-11f4f9885131.jpg" alt="降本提效" className="w-32 h-32 mx-auto mb-4 object-cover rounded-full" />
                <h4 className="text-lg font-bold text-blue-800 mb-3">降本提效</h4>
                <p className="text-gray-700">无需昂贵设备，诊所常备器具即可开展</p>
              </div>
              <div className="text-center p-8 bg-gradient-to-br from-green-50 to-green-100 rounded-lg border-2 border-green-200">
                <img src="https://pub-cdn.sider.ai/u/U0VEHOZ1EV8/web-coder/685bd991ed3fbefa177e5b5f/resource/df2a03e0-0a26-4f45-8603-daa23b9061d5.jpg" alt="口碑提升" className="w-32 h-32 mx-auto mb-4 object-cover rounded-full" />
                <h4 className="text-lg font-bold text-green-800 mb-3">口碑提升</h4>
                <p className="text-gray-700">显著疗效快速建立患者信任，回头客、客带客</p>
              </div>
              <div className="text-center p-8 bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg border-2 border-purple-200">
                <img src="https://pub-cdn.sider.ai/u/U0VEHOZ1EV8/web-coder/685bd991ed3fbefa177e5b5f/resource/d69e1d15-946d-4d9f-b030-5ba8ff505a8d.jpg" alt="风险共担" className="w-32 h-32 mx-auto mb-4 object-cover rounded-full" />
                <h4 className="text-lg font-bold text-purple-800 mb-3">风险共担</h4>
                <p className="text-gray-700">总部全程提供产品、技术培训与运营支持</p>
              </div>
              <div className="text-center p-8 bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg border-2 border-orange-200">
                <img src="https://pub-cdn.sider.ai/u/U0VEHOZ1EV8/web-coder/685bd991ed3fbefa177e5b5f/resource/ce559c57-e7fb-48cf-a43d-ce4f45f17c53.jpg" alt="人才速成" className="w-32 h-32 mx-auto mb-4 object-cover rounded-full" />
                <h4 className="text-lg font-bold text-orange-800 mb-3">人才速成</h4>
                <p className="text-gray-700">3天培训基础入门，8天掌握十九大病症疗法</p>
              </div>
              <div className="text-center p-8 bg-gradient-to-br from-pink-50 to-pink-100 rounded-lg border-2 border-pink-200">
                <img src="https://pub-cdn.sider.ai/u/U0VEHOZ1EV8/web-coder/685bd991ed3fbefa177e5b5f/resource/c20a6fc4-a3e7-4af8-b6bc-e3059f811a68.jpg" alt="精品课程" className="w-32 h-32 mx-auto mb-4 object-cover rounded-full" />
                <h4 className="text-lg font-bold text-pink-800 mb-3">精品课程</h4>
                <p className="text-gray-700">与专长医师共建特色精品课，学员医师学更多技术，开课医师赚更多收益</p>
              </div>
              <div className="text-center p-8 bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-lg border-2 border-indigo-200">
                <img src="https://pub-cdn.sider.ai/u/U0VEHOZ1EV8/web-coder/685bd991ed3fbefa177e5b5f/resource/08797a2f-b14c-4833-acb4-bf7a28a4042a.jpg" alt="数据支持" className="w-32 h-32 mx-auto mb-4 object-cover rounded-full" />
                <h4 className="text-lg font-bold text-indigo-800 mb-3">数据支持</h4>
                <p className="text-gray-700">智能系统跟踪诊疗数据与营收情况</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 合作模式详解区 */}
      <section id="cooperation" className="py-20 px-4 bg-gradient-to-b from-amber-50 to-orange-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-red-800 mb-4">合作模式详解</h2>
            <p className="text-xl text-amber-800 font-bold">零风险联营，先赚钱后分账</p>
          </div>

          {/* 合作流程 */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-center text-amber-800 mb-8">合作流程</h3>
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-red-800 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">1</div>
                <h4 className="text-lg font-bold text-red-800 mb-2">资质审核</h4>
                <p className="text-gray-700">提交诊所合规资质</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-amber-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">2</div>
                <h4 className="text-lg font-bold text-amber-800 mb-2">押金缴纳</h4>
                <p className="text-gray-700">缴纳3000元联营服务押金，随时可退</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">3</div>
                <h4 className="text-lg font-bold text-green-800 mb-2">技术培训</h4>
                <p className="text-gray-700">3天内训+5天集训营</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">4</div>
                <h4 className="text-lg font-bold text-blue-800 mb-2">分润模式</h4>
                <p className="text-gray-700">70%营收归诊所，30%总部分成</p>
              </div>
            </div>
          </div>

          {/* 收益测算表 */}
          <div className="bg-white p-8 rounded-2xl shadow-xl">
            <div className="text-center mb-10">
              <h3 className="text-3xl font-bold text-red-800 mb-4">收益测算一览</h3>
              <div className="w-24 h-1 bg-gradient-to-r from-red-600 to-amber-600 mx-auto rounded-full"></div>
              <p className="text-lg text-amber-800 mt-4">数据为王，让收益看得见</p>
            </div>

            {/* 收益卡片组 */}
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {/* 保守情况 */}
              <div className="group relative bg-gradient-to-br from-red-100 to-red-50 border-2 border-red-200 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer">
                <div className="absolute top-4 right-4">
                  <span className="bg-red-800 text-white px-3 py-1 rounded-full text-xs font-bold">保守情况</span>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold mb-4 text-red-800 group-hover:scale-110 transition-transform duration-300">
                    25.2<span className="text-xl">万</span>
                  </div>
                  <div className="space-y-2 mb-4 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">日治疗量</span>
                      <span className="font-bold text-red-700">10部位</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">单部位收费</span>
                      <span className="font-bold text-red-700">100元</span>
                    </div>
                  </div>
                  <div className="w-full bg-red-200 rounded-full h-2">
                    <div className="bg-red-600 h-2 rounded-full w-1/3 transition-all duration-1000 group-hover:w-full"></div>
                  </div>
                </div>
              </div>

              {/* 一般情况 */}
              <div className="group relative bg-gradient-to-br from-amber-100 to-orange-50 border-2 border-amber-300 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer">
                <div className="absolute top-4 right-4">
                  <span className="bg-amber-600 text-white px-3 py-1 rounded-full text-xs font-bold">一般情况</span>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold mb-4 text-amber-800 group-hover:scale-110 transition-transform duration-300">
                    50.4<span className="text-xl">万</span>
                  </div>
                  <div className="space-y-2 mb-4 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">日治疗量</span>
                      <span className="font-bold text-amber-700">10部位</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">单部位收费</span>
                      <span className="font-bold text-amber-700">200元</span>
                    </div>
                  </div>
                  <div className="w-full bg-amber-200 rounded-full h-2">
                    <div className="bg-amber-600 h-2 rounded-full w-2/3 transition-all duration-1000 group-hover:w-full"></div>
                  </div>
                </div>
              </div>

              {/* 乐观情况 */}
              <div className="group relative bg-gradient-to-br from-orange-100 to-red-50 border-2 border-orange-200 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer">
                <div className="absolute top-4 right-4">
                  <span className="bg-orange-600 text-white px-3 py-1 rounded-full text-xs font-bold">乐观情况</span>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold mb-4 text-orange-800 group-hover:scale-110 transition-transform duration-300">
                    100.8<span className="text-xl">万</span>
                  </div>
                  <div className="space-y-2 mb-4 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">日治疗量</span>
                      <span className="font-bold text-orange-700">20部位</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">单部位收费</span>
                      <span className="font-bold text-orange-700">200元</span>
                    </div>
                  </div>
                  <div className="w-full bg-orange-200 rounded-full h-2">
                    <div className="bg-orange-600 h-2 rounded-full w-full transition-all duration-1000"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* 特别说明 */}
            <div className="bg-gradient-to-r from-red-50 to-amber-50 border-l-4 border-red-600 p-6 rounded-lg">
              <div className="text-center">
                <span className="text-xl font-bold text-red-800">特别说明：</span>
                <p className="text-lg text-gray-700 mt-2 font-medium">
                  "总部配送药油，诊所先营收，后结算，真正零风险合作"
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 培训体系专区 */}
      <section id="training" className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-red-800 mb-4">培训体系专区</h2>
            <p className="text-xl text-amber-800 font-bold">3天内训，开启诊所爆单之路</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            {/* 培训内容 */}
            <div>
              <h3 className="text-2xl font-bold text-amber-800 mb-8">培训内容模块</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4 p-4 bg-red-50 rounded-lg">
                  <div className="w-8 h-8 bg-red-800 text-white rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-red-800 mb-2">理论课程</h4>
                    <p className="text-gray-700">壮医油针疗法原理与适应症</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 p-4 bg-amber-50 rounded-lg">
                  <div className="w-8 h-8 bg-amber-600 text-white rounded-full flex items-center justify-center flex-shrink-0">
                    <Users className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-amber-800 mb-2">实操教学</h4>
                    <p className="text-gray-700">基础针+辅针标准化操作流程</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 p-4 bg-green-50 rounded-lg">
                  <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center flex-shrink-0">
                    <Star className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-green-800 mb-2">临床模拟</h4>
                    <p className="text-gray-700">常见痛症治疗方案实战演练</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 p-4 bg-blue-50 rounded-lg">
                  <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-blue-800 mb-2">运营指导</h4>
                    <p className="text-gray-700">诊所经营与患者服务赋能</p>
                  </div>
                </div>
              </div>
            </div>

            {/* 培训优势 */}
            <div>
              <h3 className="text-2xl font-bold text-amber-800 mb-8">培训优势</h3>
              <div className="space-y-8">
                <div className="p-6 bg-gradient-to-r from-red-100 to-red-50 rounded-lg border-l-4 border-red-500">
                  <h4 className="text-lg font-bold text-red-800 mb-3">双师教学</h4>
                  <p className="text-gray-700">创始人亲授技术演示+市场专家分享推广策略</p>
                </div>
                <div className="p-6 bg-gradient-to-r from-green-100 to-green-50 rounded-lg border-l-4 border-green-500">
                  <h4 className="text-lg font-bold text-green-800 mb-3">持续复训</h4>
                  <p className="text-gray-700">终身免费参加技术课程复训</p>
                </div>
              </div>
            </div>
          </div>

          {/* 往期课程展示 */}
          <div className="relative">
            <div className="text-center mb-16">
              <h3 className="text-3xl font-bold text-amber-800 mb-4">往期课程掠影</h3>
              <div className="w-24 h-1 bg-gradient-to-r from-red-600 to-amber-600 mx-auto mb-4 rounded-full"></div>
              <p className="text-lg text-gray-600">见证每一次技术传承与突破</p>
            </div>
            
            {/* 主要展示区 - 大卡片 */}
            <div className="mb-12">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="group relative overflow-hidden rounded-2xl shadow-2xl bg-gradient-to-br from-red-50 to-amber-50 border-2 border-red-100">
                  <div className="absolute top-4 left-4 z-10">
                    <span className="bg-red-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">最新一期</span>
                  </div>
                  <img src="https://pub-cdn.sider.ai/u/U0VEHOZ1EV8/web-coder/685bd991ed3fbefa177e5b5f/resource/7afb68a0-d203-41e2-ad91-dae7fc8248af.jpg" alt="易针经最新培训" className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h4 className="text-2xl font-bold mb-2">分组学习热烈交流</h4>
                    <p className="text-gray-200">全国医师齐聚一堂，交流经验，共同学习</p>
                  </div>
                </div>
                
                <div className="group relative overflow-hidden rounded-2xl shadow-2xl bg-gradient-to-br from-amber-50 to-orange-50 border-2 border-amber-100">
                  <div className="absolute top-4 left-4 z-10">
                    <span className="bg-amber-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">精彩回顾</span>
                  </div>
                  <img src="https://pub-cdn.sider.ai/u/U0VEHOZ1EV8/web-coder/685bd991ed3fbefa177e5b5f/resource/a82d963f-c8ce-4daf-bf0a-6c2c91463fa3.jpg" alt="培训精彩瞬间" className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h4 className="text-2xl font-bold mb-2">技术交流与实操演示</h4>
                    <p className="text-gray-200">手把手教学，学员现场掌握核心技术要领</p>
                  </div>
                </div>
              </div>
            </div>

            {/* 历届回顾 - 小卡片网格 */}
            <div className="bg-gradient-to-b from-gray-50 to-white p-8 rounded-3xl border border-gray-100">
              <h4 className="text-2xl font-bold text-center text-gray-800 mb-8">历届培训回顾</h4>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {[
                  { title: "第十七届", location: "深圳", highlight: true },
                  { title: "第十六届", location: "东莞", highlight: false },
                  { title: "第十五届", location: "深圳", highlight: false },
                  { title: "第十四届", location: "广州", highlight: true },
                  { title: "第十三届", location: "深圳", highlight: false },
                  { title: "第十二届", location: "东莞", highlight: false },
                  { title: "第十一届", location: "深圳", highlight: true },
                  { title: "第十届", location: "佛山", highlight: false }
                ].map((course, index) => (
                  <div key={index} className={`group relative overflow-hidden rounded-xl transition-all duration-300 hover:shadow-lg ${course.highlight ? 'bg-gradient-to-br from-red-100 to-red-50 border-2 border-red-200' : 'bg-white border border-gray-200'}`}>
                    <img src="https://pub-cdn.sider.ai/u/U0VEHOZ1EV8/web-coder/685bd991ed3fbefa177e5b5f/resource/e47d0e08-2e95-4574-a7ee-c692bc6d613b.jpg" alt={`${course.title}培训`} className="w-full h-32 object-cover group-hover:scale-110 transition-transform duration-300" />
                    <div className="p-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className={`text-lg font-bold ${course.highlight ? 'text-red-700' : 'text-gray-700'}`}>{course.title}</span>
                        {course.highlight && <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>}
                      </div>
                      <p className="text-sm text-gray-600">{course.location}站</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 数据统计 */}
            <div className="mt-16 text-center">
              <div className="bg-gradient-to-r from-red-600 to-amber-600 text-white py-8 px-6 rounded-2xl">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  <div>
                    <div className="text-3xl font-bold mb-2">22+</div>
                    <div className="text-sm opacity-90">届培训课程</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold mb-2">500+</div>
                    <div className="text-sm opacity-90">学员医师</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold mb-2">98%</div>
                    <div className="text-sm opacity-90">满意度</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold mb-2">300+</div>
                    <div className="text-sm opacity-90">合作诊所</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 成功案例展示区 */}
      <section id="cases" className="py-20 px-4 bg-gradient-to-b from-amber-50 to-orange-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-red-800 mb-4">成功案例展示</h2>
            <p className="text-xl text-amber-800 font-bold">300+诊所见证，口碑就是最好的广告</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* 案例1 */}
            <div className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-red-500">
              <div className="flex items-center mb-4">
                <img src="https://pub-cdn.sider.ai/u/U0VEHOZ1EV8/web-coder/685bd991ed3fbefa177e5b5f/resource/856cf715-cf89-41dc-a130-67447de2b351.jpg" alt="春仁堂中医馆" className="w-16 h-16 rounded-full object-cover mr-4" />
                <div>
                  <h3 className="text-xl font-bold text-red-800">春仁堂中医馆</h3>
                  <p className="text-amber-600 font-semibold">引入油针后月营收增长300%</p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <span className="text-red-500 font-bold">痛点：</span>
                  <span className="text-gray-700">缺乏特色项目，客流持续下滑</span>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-green-600 font-bold">解决：</span>
                  <span className="text-gray-700">3天培训后开展油针项目</span>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-blue-600 font-bold">成果：</span>
                  <span className="text-gray-700">首月接诊120人次，营收8.4万</span>
                </div>
              </div>
            </div>

            {/* 案例2 */}
            <div className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-green-500">
              <div className="flex items-center mb-4">
                <img src="https://pub-cdn.sider.ai/u/U0VEHOZ1EV8/web-coder/685bd991ed3fbefa177e5b5f/resource/18a9910e-19a0-4457-9c8b-c6355e0ae97a.jpg" alt="澧县服务中心" className="w-16 h-16 rounded-full object-cover mr-4" />
                <div>
                  <h3 className="text-xl font-bold text-green-800">澧县服务中心</h3>
                  <p className="text-amber-600 font-semibold">从0到日诊20部位的逆袭</p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <span className="text-red-500 font-bold">痛点：</span>
                  <span className="text-gray-700">技术单一，无法留住疼痛患者</span>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-green-600 font-bold">解决：</span>
                  <span className="text-gray-700">标准化治疗+总部拓客支持</span>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-blue-600 font-bold">成果：</span>
                  <span className="text-gray-700">3个月建立区域口碑，日治疗量稳定20部位</span>
                </div>
              </div>
            </div>
          </div>

          {/* 联营诊所合作见证 - 不规则瀑布流设计 */}
          <div className="relative">
            <div className="text-center mb-16">
              <h3 className="text-3xl font-bold text-amber-800 mb-6">联营诊所合作见证</h3>
              <div className="w-32 h-1 bg-gradient-to-r from-red-600 to-amber-600 mx-auto rounded-full mb-6"></div>
              <p className="text-lg text-gray-600 mb-4">300+ 诊所携手共赢，见证每一次成功合作</p>
            </div>

            {/* 不规则瀑布流照片墙 */}
            <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4 auto-rows-min">
              {[
                { src: 'https://pub-cdn.sider.ai/u/U0VEHOZ1EV8/web-coder/685bd991ed3fbefa177e5b5f/resource/177a93e1-327e-4ae1-a97d-e60c13a984ea.jpg', title: '全国合作签约仪式', desc: '与全国各地优秀诊所建立长期合作关系', gridClass: 'col-span-2 row-span-2', highlight: true },
                { src: 'https://pub-cdn.sider.ai/u/U0VEHOZ1EV8/web-coder/685bd991ed3fbefa177e5b5f/resource/b1f01727-37b1-47a2-8aa0-cd1a24721796.jpg', title: '医疗合作洽谈', desc: '深度交流，共谋发展', gridClass: 'col-span-1 row-span-2', highlight: false },
                { src: 'https://pub-cdn.sider.ai/u/U0VEHOZ1EV8/web-coder/685bd991ed3fbefa177e5b5f/resource/68807f86-dc3a-40f3-b980-bb99bc31dc99.jpg', title: '技术培训现场', desc: '手把手传授核心技术', gridClass: 'col-span-1 row-span-2', highlight: true },
                { src: 'https://pub-cdn.sider.ai/u/U0VEHOZ1EV8/web-coder/685bd991ed3fbefa177e5b5f/resource/53692ec2-9f08-4408-afaa-3d44b6bc8487.jpg', title: '传统医学交流', desc: '弘扬中医文化', gridClass: 'col-span-2 row-span-1', highlight: false },
                { src: 'https://pub-cdn.sider.ai/u/U0VEHOZ1EV8/web-coder/685bd991ed3fbefa177e5b5f/resource/4570cf3a-3d89-46de-8482-ca3067896f8c.jpg', title: '诊所环境升级', desc: '合作后环境全面提升', gridClass: 'col-span-2 row-span-2', highlight: true },
                { src: 'https://pub-cdn.sider.ai/u/U0VEHOZ1EV8/web-coder/685bd991ed3fbefa177e5b5f/resource/2ea0139e-b8db-472b-ae1c-8961a8649c1e.jpg', title: '医师友好合作', desc: '建立深厚友谊', gridClass: 'col-span-1 row-span-1', highlight: false },
                { src: 'https://pub-cdn.sider.ai/u/U0VEHOZ1EV8/web-coder/685bd991ed3fbefa177e5b5f/resource/5191d4db-4f0e-45cb-ba91-159ce3b8635b.jpg', title: '中医药材展示', desc: '优质药材，疗效保障', gridClass: 'col-span-1 row-span-2', highlight: false },
                { src: 'https://pub-cdn.sider.ai/u/U0VEHOZ1EV8/web-coder/685bd991ed3fbefa177e5b5f/resource/9b1e2f9a-72fd-4b01-b568-a4e31c6e394d.jpg', title: '医疗设备介绍', desc: '先进设备，专业服务', gridClass: 'col-span-2 row-span-1', highlight: false },
                { src: 'https://pub-cdn.sider.ai/u/U0VEHOZ1EV8/web-coder/685bd991ed3fbefa177e5b5f/resource/1ae9291d-746c-4984-938c-dd0bce49a12a.jpg', title: '团队合作会议', desc: '齐心协力，共创辉煌', gridClass: 'col-span-1 row-span-2', highlight: false },
                { src: 'https://pub-cdn.sider.ai/u/U0VEHOZ1EV8/web-coder/685bd991ed3fbefa177e5b5f/resource/921199f9-1e71-4ed3-a6c3-85665d1eca6e.jpg', title: '针灸工具展示', desc: '精品工具，精准治疗', gridClass: 'col-span-1 row-span-1', highlight: false },
                { src: 'https://pub-cdn.sider.ai/u/U0VEHOZ1EV8/web-coder/685bd991ed3fbefa177e5b5f/resource/1334c790-b8b3-414f-9ad6-5c2e4c3c3cc3.jpg', title: '开业庆典仪式', desc: '隆重开业，共襄盛举', gridClass: 'col-span-2 row-span-2', highlight: true },
                { src: 'https://pub-cdn.sider.ai/u/U0VEHOZ1EV8/web-coder/685bd991ed3fbefa177e5b5f/resource/d827e877-f992-46f5-a075-5373535ece5e.jpg', title: '医学会议交流', desc: '学术交流，提升水平', gridClass: 'col-span-1 row-span-1', highlight: false },
                { src: 'https://pub-cdn.sider.ai/u/U0VEHOZ1EV8/web-coder/685bd991ed3fbefa177e5b5f/resource/df937537-bcc2-41b7-97e5-78b0f811edae.jpg', title: '草药研究展示', desc: '传承古方，创新发展', gridClass: 'col-span-1 row-span-2', highlight: false },
                { src: 'https://pub-cdn.sider.ai/u/U0VEHOZ1EV8/web-coder/685bd991ed3fbefa177e5b5f/resource/8c1c423e-b4cf-4d91-a518-e3aeb2c49928.jpg', title: '诊所技能培训', desc: '技能提升，服务升级', gridClass: 'col-span-2 row-span-2', highlight: false },
                { src: 'https://pub-cdn.sider.ai/u/U0VEHOZ1EV8/web-coder/685bd991ed3fbefa177e5b5f/resource/40a87fbc-5103-47f1-8109-ef69ddddcd3e.jpg', title: '医疗伙伴关系', desc: '强强联合，共赢未来', gridClass: 'col-span-2 row-span-1', highlight: false },
                { src: 'https://pub-cdn.sider.ai/u/U0VEHOZ1EV8/web-coder/685bd991ed3fbefa177e5b5f/resource/05904660-b6e0-450d-a8e7-fb23e4939127.jpg', title: '诊所成功案例', desc: '营收翻倍，口碑倍增', gridClass: 'col-span-2 row-span-2', highlight: true },
                { src: 'https://pub-cdn.sider.ai/u/U0VEHOZ1EV8/web-coder/685bd991ed3fbefa177e5b5f/resource/b58629c6-487f-468f-8ed8-95449861dead.jpg', title: '传统疗法演示', desc: '古法新用，效果显著', gridClass: 'col-span-1 row-span-2', highlight: false },
                { src: 'https://pub-cdn.sider.ai/u/U0VEHOZ1EV8/web-coder/685bd991ed3fbefa177e5b5f/resource/3bbbed86-b56f-4583-b688-8f8d679cc017.jpg', title: '医疗荣誉颁奖', desc: '实至名归，荣耀时刻', gridClass: 'col-span-1 row-span-2', highlight: false },
                { src: 'https://pub-cdn.sider.ai/u/U0VEHOZ1EV8/web-coder/685bd991ed3fbefa177e5b5f/resource/b8792ff6-66ad-4468-850e-27bb716ba981.jpg', title: '诊所规模扩张', desc: '蓬勃发展，再创新高', gridClass: 'col-span-1 row-span-1', highlight: false },
                { src: 'https://pub-cdn.sider.ai/u/U0VEHOZ1EV8/web-coder/685bd991ed3fbefa177e5b5f/resource/2b49f51d-5b4a-4f0b-b3ca-163e86891d18.jpg', title: '医疗技术创新', desc: '科技赋能，创新引领', gridClass: 'col-span-1 row-span-2', highlight: false },
                { src: 'https://pub-cdn.sider.ai/u/U0VEHOZ1EV8/web-coder/685bd991ed3fbefa177e5b5f/resource/2e7794a8-0b1a-42b2-9a29-f5a31efdc4a5.jpg', title: '诊所网络建设', desc: '网络布局，全国覆盖', gridClass: 'col-span-2 row-span-1', highlight: false },
                { src: 'https://pub-cdn.sider.ai/u/U0VEHOZ1EV8/web-coder/685bd991ed3fbefa177e5b5f/resource/40e65466-fa59-4994-b36d-b589d897500f.jpg', title: '医疗团队合影', desc: '精英团队，专业保障', gridClass: 'col-span-2 row-span-2', highlight: true }
              ].map((item, index) => {
                // 为高亮卡片设置特殊样式
                const cardStyle = item.highlight 
                  ? `group relative bg-white rounded-2xl shadow-2xl overflow-hidden border-2 border-red-200 hover:border-red-400 hover:shadow-3xl transform hover:-translate-y-2 transition-all duration-500 cursor-pointer ${item.gridClass} flex flex-col`
                  : `group relative bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 hover:border-amber-300 hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 cursor-pointer ${item.gridClass} flex flex-col`;

                return (
                  <div key={index} className={cardStyle}>
                    {/* 图片区域 */}
                    <div className="relative overflow-hidden flex-1">
                      <img 
                        src={item.src} 
                        alt={item.title} 
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      {/* 渐变遮罩 */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      
                      {/* 悬停内容 */}
                      <div className="absolute inset-0 flex flex-col justify-end p-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <h4 className="text-lg font-bold mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100">{item.title}</h4>
                        <p className="text-sm text-gray-200 leading-relaxed transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-200">{item.desc}</p>
                      </div>
                      
                      {/* 装饰元素 */}
                      <div className="absolute top-4 right-4 w-8 h-8 bg-gradient-to-br from-amber-400 to-red-500 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 delay-300 transform scale-0 group-hover:scale-100">
                        <span className="text-white text-xs font-bold">{index + 1}</span>
                      </div>
                    </div>
                    
                    {/* 高亮卡片的底部信息 */}
                    {item.highlight && (
                      <div className="p-4 bg-gradient-to-r from-amber-50 to-red-50 mt-auto">
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium text-gray-600">合作成果</span>
                          <div className="flex items-center space-x-2">
                            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                            <span className="text-xs text-green-600 font-bold">热门</span>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* 数据统计 */}
            <div className="mt-20 bg-gradient-to-br from-amber-100 via-orange-50 to-red-50 py-16 px-8 rounded-3xl shadow-xl border-2 border-amber-200">
              <div className="text-center mb-12">
                <h4 className="text-3xl font-bold mb-4 text-red-800">合作成果一览</h4>
                <div className="w-24 h-1 bg-gradient-to-r from-red-600 to-amber-600 mx-auto rounded-full"></div>
                <p className="text-amber-800 mt-4 font-medium">数据见证实力，成果彰显价值</p>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {[
                  { number: '300+', label: '合作诊所', desc: '覆盖全国各地', icon: '🏥', color: 'text-red-700' },
                  { number: '50+', label: '覆盖城市', desc: '持续扩展中', icon: '🌍', color: 'text-amber-700' },
                  { number: '95%', label: '续约率', desc: '客户满意度极高', icon: '⭐', color: 'text-orange-700' },
                  { number: '1000+', label: '培训学员', desc: '技术传承有序', icon: '👨‍⚕️', color: 'text-red-700' }
                ].map((stat, index) => (
                  <div key={index} className="group text-center cursor-pointer bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-amber-100 hover:border-amber-300">
                    <div className="mb-4 text-4xl group-hover:scale-110 transition-transform duration-300">
                      {stat.icon}
                    </div>
                    <div className={`text-5xl font-bold mb-3 group-hover:scale-110 transition-transform duration-300 ${stat.color}`}>
                      {stat.number}
                    </div>
                    <div className="text-xl font-semibold text-amber-800 mb-2">
                      {stat.label}
                    </div>
                    <div className="text-sm text-gray-600 leading-relaxed">
                      {stat.desc}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 报名行动区 */}
      <section id="contact" className="py-20 px-4 bg-gradient-to-r from-red-900 to-red-800 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            立即免费报名，下一个增收诊所就是你
          </h2>
          <p className="text-xl mb-8 text-gray-200">
            <span className="bg-yellow-500 text-black px-3 py-1 rounded font-bold">免费名额仅限100名，满额即止</span>
          </p>
          <div className="flex justify-center mb-8">
            <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold px-16 py-8 text-2xl">
              立即参加三天体验公开课
            </Button>
          </div>
          <div className="text-center text-gray-300">
            <p>还有疑问？扫码添加微信，1对1咨询</p>
            <img src="https://pub-cdn.sider.ai/u/U0VEHOZ1EV8/web-coder/685bd991ed3fbefa177e5b5f/resource/351b118d-4148-4360-b3e2-a830585d069a.jpg" alt="易针经微信二维码" className="w-32 h-32 mx-auto mt-4 rounded-lg object-cover" />
          </div>
        </div>
      </section>

      {/* 申请成为服务中心 */}
      <section className="py-20 px-4 bg-gradient-to-b from-amber-100 to-orange-100">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-red-800 mb-4">申请成为服务中心</h2>
          <p className="text-2xl text-amber-800 font-bold mb-6">跑马圈地，共赢千亿大市场</p>
          <p className="text-lg text-gray-700 mb-8">
            获得区域授权，推广服务联营诊所，年赚百万好轻松
          </p>
          <Button size="lg" className="bg-red-800 hover:bg-red-900 text-white px-12 py-6 text-xl">
            <Phone className="w-5 h-5 mr-2" />
            立即咨询：13380322981
          </Button>
        </div>
      </section>

      {/* 底部信息区 */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-yellow-400 mb-4">复兴民族中医，普惠大众健康</h3>
          </div>
          <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
            <div>
              <h4 className="text-lg font-bold mb-4 text-yellow-400">联系方式</h4>
              <div className="space-y-2">
                <div className="flex items-center justify-center md:justify-start">
                  <Users className="w-4 h-4 mr-2" />
                  <span>公司信息：深圳道略天下科技有限公司</span>
                </div>
                <div className="flex items-center justify-center md:justify-start">
                  <Phone className="w-4 h-4 mr-2" />
                  <span>咨询热线：13380322981</span>
                </div>
                <div className="flex items-start justify-center md:justify-start">
                  <MapPin className="w-4 h-4 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-sm">总部地址：深圳市宝安区西乡街道凤凰岗社区凤凰岗路60号凤凰岗居委办公大楼307</span>
                </div>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4 text-yellow-400">官方微信</h4>
              <img src="https://pub-cdn.sider.ai/u/U0VEHOZ1EV8/web-coder/685bd991ed3fbefa177e5b5f/resource/08d98665-171c-4a5e-ae94-cbaa83b3ca8c.jpg" alt="易针经服务号二维码" className="w-24 h-24 mx-auto md:mx-0 rounded-lg object-cover" />
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4 text-yellow-400">品牌标识</h4>
              <div className="flex items-center justify-center md:justify-start">
                <img src="https://pub-cdn.sider.ai/u/U0VEHOZ1EV8/web-coder/685bd991ed3fbefa177e5b5f/resource/0d13ef69-5fb7-42dd-8dbb-0809edbf3890.png" alt="易针经logo" className="w-24 h-24 rounded-full object-cover" />
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400 text-sm">
            <p>© 2025 易针经版权所有 | 用科技力量 悬壶济世 造福大众</p>
          </div>
        </div>
      </footer>
    </div>
  );
}